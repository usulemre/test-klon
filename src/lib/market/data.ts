// Simüle piyasa verisi. Gerçek API yerine deterministik başlangıç serileri +
// seeded random-walk üretir; useLivePrices hook'u bunları client-side "canlı"
// olarak günceller. Gerçek API'ye geçişte yalnızca bu modül + hook değişir.

export type Instrument = {
  symbol: string;
  name: string;
  badge: string; // kartta gösterilen kısa rozet ("100", "30", ...)
  unit: string; // "Puan" | "₺"
  base: number; // başlangıç değeri
  volatility: number; // tick oynaklığı (oransal)
  category: "endeks" | "fon";
  href?: string;
};

// BIST endeksleri (referans görseldeki kartlar)
export const indices: Instrument[] = [
  { symbol: "XU100", name: "BIST 100", badge: "100", unit: "Puan", base: 14194.04, volatility: 0.0009, category: "endeks" },
  { symbol: "XU030", name: "BIST 30", badge: "30", unit: "Puan", base: 16154.77, volatility: 0.001, category: "endeks" },
  { symbol: "XU050", name: "BIST 50", badge: "50", unit: "Puan", base: 12605.48, volatility: 0.0009, category: "endeks" },
  { symbol: "XUKAT", name: "BIST Katılım", badge: "K", unit: "Puan", base: 18121.31, volatility: 0.0011, category: "endeks" },
  { symbol: "XBANK", name: "BIST Banka", badge: "B", unit: "Puan", base: 19356.3, volatility: 0.0014, category: "endeks" },
  { symbol: "XUTUM", name: "BIST Tüm", badge: "T", unit: "Puan", base: 15487.12, volatility: 0.0008, category: "endeks" },
];

// Fon pay fiyatları (mega menü + fon kartları)
export const fundPrices: Instrument[] = [
  { symbol: "ANK", name: "Anka Serbest Fon", badge: "AN", unit: "₺", base: 12.4832, volatility: 0.0012, category: "fon", href: "/fonlar/anka-serbest-fon" },
  { symbol: "MAV", name: "Mavi Serbest Fon", badge: "MV", unit: "₺", base: 9.7415, volatility: 0.0015, category: "fon", href: "/fonlar/mavi-serbest-fon" },
  { symbol: "PRL", name: "Parla Serbest Fon", badge: "PR", unit: "₺", base: 21.0673, volatility: 0.0018, category: "fon", href: "/fonlar/parla-serbest-fon" },
  { symbol: "SLR", name: "Salur Hisse Senedi Fon", badge: "SL", unit: "₺", base: 6.3128, volatility: 0.0026, category: "fon", href: "/fonlar/salur-hisse-senedi-fon" },
];

export const allInstruments = [...indices, ...fundPrices];

// Deterministik pseudo-random (sunucu ve ilk client render aynı seri → hydration uyumu)
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Bir enstrüman için başlangıç serisi (intraday görünümü). Trend hafif yukarı yönlü.
export function seedSeries(inst: Instrument, points = 32): number[] {
  const rand = mulberry32(hashSymbol(inst.symbol));
  const series: number[] = [];
  // günün açılışını mevcut değerin biraz altından başlat ki % değişim pozitif çıksın
  let v = inst.base * (1 - inst.volatility * 8);
  for (let i = 0; i < points; i++) {
    const drift = inst.base * inst.volatility * 0.35; // hafif yukarı trend
    const noise = (rand() - 0.5) * 2 * inst.base * inst.volatility * 1.6;
    v = v + drift + noise;
    series.push(round(v, inst.unit === "₺" ? 4 : 2));
  }
  // son noktayı base'e yakınsa ki gösterilen değer tutarlı olsun
  series[series.length - 1] = inst.base;
  return series;
}

function hashSymbol(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function round(n: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

export function formatValue(n: number, unit: string): string {
  const digits = unit === "₺" ? 4 : 2;
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}

export function formatPercent(n: number): string {
  const s = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "always",
  }).format(n);
  return `%${s}`;
}
