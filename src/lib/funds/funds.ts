// Fon domain verisi. 4 serbest/hisse fonu; rapordaki "tek sekmeli fon detay"
// yapısına uygun dokümanlar ve performans serileri.

export type FundDoc = { label: string; type: string; date: string };

export type Fund = {
  slug: string;
  symbol: string; // useLivePrices sembolü
  code: string; // KAP/fon kodu
  name: string;
  shortName: string;
  type: string;
  strategy: string;
  riskLevel: number; // 1-7
  riskLabel: string;
  inceptionDate: string;
  currency: string;
  navPrice: number; // güncel birim pay fiyatı (bir önceki iş günü kapanışına göre belirlenir)
  dailyChangePct: number; // bir önceki güne göre günlük değişim (%)
  aum: string;
  managementFee: string;
  minInvestment: string;
  benchmark: string;
  color: string; // marka rengi (grafik/kart)
  summary: string;
  highlights: string[];
  // performans (yüzde getiri) — dönem bazlı
  returns: { period: string; value: number }[];
  // izahname / KAP / denetim dokümanları (sekmeler)
  docs: {
    ictuzuk: FundDoc[];
    izahname: FundDoc[];
    raporlar: FundDoc[];
    kap: FundDoc[];
    denetim: FundDoc[];
  };
  duyurular: { date: string; title: string }[];
  // portföy dağılımı (basit)
  allocation: { label: string; weight: number }[];
};

const baseDocs = (name: string): Fund["docs"] => ({
  ictuzuk: [{ label: `${name} İçtüzüğü`, type: "PDF", date: "01.02.2026" }],
  izahname: [
    { label: `${name} İzahnamesi`, type: "PDF", date: "01.02.2026" },
    { label: "Yatırımcı Bilgi Formu (KIID)", type: "PDF", date: "01.02.2026" },
  ],
  raporlar: [
    { label: "2025 Yıllık Faaliyet Raporu", type: "PDF", date: "15.01.2026" },
    { label: "2025 4. Çeyrek Portföy Raporu", type: "PDF", date: "10.01.2026" },
    { label: "2025 3. Çeyrek Portföy Raporu", type: "PDF", date: "10.10.2025" },
  ],
  kap: [
    { label: "Fon Portföy Değeri Bildirimi", type: "KAP", date: "22.07.2026" },
    { label: "Fiyat Raporu", type: "KAP", date: "22.07.2026" },
  ],
  denetim: [{ label: "2025 Bağımsız Denetim Raporu", type: "PDF", date: "28.02.2026" }],
});

export const funds: Fund[] = [
  {
    slug: "anka-serbest-fon",
    symbol: "ANK",
    code: "ANK",
    name: "Test Klon Portföy Anka Serbest Fon",
    shortName: "Anka Serbest Fon",
    type: "Serbest (Hedge) Fon",
    strategy: "Çok Varlıklı / Dengeli",
    riskLevel: 4,
    riskLabel: "Orta",
    inceptionDate: "12.03.2018",
    currency: "TRY",
    navPrice: 12.4832,
    dailyChangePct: 0.42,
    aum: "2,4 Milyar ₺",
    managementFee: "%1,90 (yıllık)",
    minInvestment: "Nitelikli yatırımcı",
    benchmark: "BIST 100 + KYD Repo bileşimi",
    color: "#0d2340",
    summary:
      "Farklı varlık sınıflarını dengeli biçimde bir araya getiren, orta risk profilinde çok varlıklı serbest fon.",
    highlights: [
      "Dengeli risk-getiri profili",
      "Aktif varlık dağılımı",
      "Nitelikli yatırımcıya özel",
    ],
    returns: [
      { period: "1 Ay", value: 3.2 },
      { period: "3 Ay", value: 9.8 },
      { period: "YBB", value: 27.4 },
      { period: "1 Yıl", value: 41.6 },
      { period: "3 Yıl", value: 168.3 },
    ],
    docs: baseDocs("Anka Serbest Fon"),
    duyurular: [
      { date: "18.07.2026", title: "Anka Serbest Fon aylık strateji notu yayımlandı" },
      { date: "01.07.2026", title: "Yönetim ücreti güncellemesi hakkında bilgilendirme" },
    ],
    allocation: [
      { label: "Hisse Senedi", weight: 42 },
      { label: "Sabit Getirili", weight: 33 },
      { label: "Para Piyasası", weight: 15 },
      { label: "Altın / Emtia", weight: 10 },
    ],
  },
  {
    slug: "mavi-serbest-fon",
    symbol: "MAV",
    code: "MAV",
    name: "Test Klon Portföy Mavi Serbest Fon",
    shortName: "Mavi Serbest Fon",
    type: "Serbest (Hedge) Fon",
    strategy: "Sabit Getirili Ağırlıklı",
    riskLevel: 3,
    riskLabel: "Orta-Düşük",
    inceptionDate: "05.09.2019",
    currency: "TRY",
    navPrice: 9.7415,
    dailyChangePct: 0.28,
    aum: "1,7 Milyar ₺",
    managementFee: "%1,50 (yıllık)",
    minInvestment: "Nitelikli yatırımcı",
    benchmark: "KYD DİBS + KYD Repo bileşimi",
    color: "#234069",
    summary:
      "Sermaye korumasını önceleyen, sabit getirili enstrüman ağırlıklı düşük-orta riskli serbest fon.",
    highlights: ["Sermaye koruma odaklı", "Düşük oynaklık", "Likit portföy"],
    returns: [
      { period: "1 Ay", value: 2.6 },
      { period: "3 Ay", value: 7.9 },
      { period: "YBB", value: 22.1 },
      { period: "1 Yıl", value: 34.8 },
      { period: "3 Yıl", value: 132.5 },
    ],
    docs: baseDocs("Mavi Serbest Fon"),
    duyurular: [{ date: "15.07.2026", title: "Mavi Serbest Fon portföy dağılımı güncellendi" }],
    allocation: [
      { label: "Sabit Getirili", weight: 55 },
      { label: "Para Piyasası", weight: 28 },
      { label: "Hisse Senedi", weight: 12 },
      { label: "Altın / Emtia", weight: 5 },
    ],
  },
  {
    slug: "parla-serbest-fon",
    symbol: "PRL",
    code: "PRL",
    name: "Test Klon Portföy Parla Serbest Fon",
    shortName: "Parla Serbest Fon",
    type: "Serbest (Hedge) Fon",
    strategy: "Büyüme / Agresif",
    riskLevel: 6,
    riskLabel: "Yüksek",
    inceptionDate: "22.01.2020",
    currency: "TRY",
    navPrice: 21.0673,
    dailyChangePct: 0.86,
    aum: "980 Milyon ₺",
    managementFee: "%2,20 (yıllık)",
    minInvestment: "Nitelikli yatırımcı",
    benchmark: "BIST 100",
    color: "#2f5384",
    summary:
      "Yüksek getiri potansiyeli hedefleyen, hisse ve alternatif enstrümanlarda aktif pozisyon alan agresif serbest fon.",
    highlights: ["Yüksek getiri potansiyeli", "Aktif pozisyon yönetimi", "Alternatif enstrümanlar"],
    returns: [
      { period: "1 Ay", value: 4.9 },
      { period: "3 Ay", value: 14.2 },
      { period: "YBB", value: 38.7 },
      { period: "1 Yıl", value: 58.9 },
      { period: "3 Yıl", value: 214.6 },
    ],
    docs: baseDocs("Parla Serbest Fon"),
    duyurular: [{ date: "20.07.2026", title: "Parla Serbest Fon rekor büyüklüğe ulaştı" }],
    allocation: [
      { label: "Hisse Senedi", weight: 62 },
      { label: "Alternatif", weight: 20 },
      { label: "Sabit Getirili", weight: 12 },
      { label: "Para Piyasası", weight: 6 },
    ],
  },
  {
    slug: "salur-hisse-senedi-fon",
    symbol: "SLR",
    code: "SLR",
    name: "Test Klon Portföy Salur Hisse Senedi Serbest Fon",
    shortName: "Salur Hisse Senedi Fon",
    type: "Hisse Senedi Serbest Fon",
    strategy: "Hisse Senedi Yoğun",
    riskLevel: 7,
    riskLabel: "En Yüksek",
    inceptionDate: "08.11.2021",
    currency: "TRY",
    navPrice: 6.3128,
    dailyChangePct: -0.19,
    aum: "1,3 Milyar ₺",
    managementFee: "%2,40 (yıllık)",
    minInvestment: "Nitelikli yatırımcı",
    benchmark: "BIST 100",
    color: "#4a70a3",
    summary:
      "Portföyünün büyük kısmını Türkiye hisse senetlerine ayıran, yüksek getiri hedefli hisse senedi serbest fonu.",
    highlights: ["Hisse senedi yoğun", "Temel analiz odaklı seçim", "Uzun vadeli büyüme"],
    returns: [
      { period: "1 Ay", value: 5.8 },
      { period: "3 Ay", value: 16.9 },
      { period: "YBB", value: 44.3 },
      { period: "1 Yıl", value: 67.2 },
      { period: "3 Yıl", value: 189.1 },
    ],
    docs: baseDocs("Salur Hisse Senedi Fon"),
    duyurular: [{ date: "12.07.2026", title: "Salur Fon yeni sektör pozisyonları hakkında not" }],
    allocation: [
      { label: "Hisse Senedi", weight: 80 },
      { label: "Para Piyasası", weight: 11 },
      { label: "Alternatif", weight: 6 },
      { label: "Sabit Getirili", weight: 3 },
    ],
  },
];

// Fon pay fiyatları canlı değildir; her iş günü, bir önceki günün sonuçlarına
// göre belirlenir. Aşağıdaki tarih, gösterilen fiyatların değerleme günüdür.
export const fundPriceDate = "23.07.2026";

export function getFund(slug: string): Fund | undefined {
  return funds.find((f) => f.slug === slug);
}

export function getFundBySymbol(symbol: string): Fund | undefined {
  return funds.find((f) => f.symbol === symbol);
}

export const fundSlugs = funds.map((f) => f.slug);

// Son ~24 iş gününün pay fiyatı serisi (sparkline için). Deterministik: sunucu
// ile client aynı seriyi üretir. Seri, güncel navPrice ile biter.
export function fundNavSeries(fund: Fund, points = 24): number[] {
  let h = 0;
  for (let i = 0; i < fund.symbol.length; i++) h = (h * 31 + fund.symbol.charCodeAt(i)) >>> 0;
  const rand = () => {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    return h / 0x7fffffff;
  };
  // Aylık getiriden yaklaşık günlük drift türet
  const monthly = fund.returns.find((r) => r.period === "1 Ay")?.value ?? 3;
  const drift = (monthly / 100 / 22) * fund.navPrice;
  const series: number[] = [];
  let v = fund.navPrice - drift * points;
  for (let i = 0; i < points; i++) {
    const noise = (rand() - 0.5) * 2 * fund.navPrice * 0.004;
    v = Math.max(v + drift + noise, fund.navPrice * 0.5);
    series.push(Math.round(v * 10000) / 10000);
  }
  series[series.length - 1] = fund.navPrice;
  return series;
}

// Fon performans grafiği için pseudo seri (kümülatif getiri eğrisi)
export function fundPerformanceSeries(fund: Fund, points = 60): number[] {
  let h = 0;
  for (let i = 0; i < fund.symbol.length; i++) h = (h * 31 + fund.symbol.charCodeAt(i)) >>> 0;
  const rand = () => {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    return h / 0x7fffffff;
  };
  const total = fund.returns.find((r) => r.period === "1 Yıl")?.value ?? 40;
  const series: number[] = [];
  let v = 100;
  for (let i = 0; i < points; i++) {
    const drift = total / points;
    const noise = (rand() - 0.45) * 4;
    v = Math.max(v + (drift + noise) * 0.9, 80);
    series.push(Math.round(v * 100) / 100);
  }
  series[series.length - 1] = Math.round((100 + total) * 100) / 100;
  return series;
}

export const riskColor = (level: number): string =>
  level <= 2 ? "#22c55e" : level <= 4 ? "#c9a24b" : level <= 5 ? "#f59e0b" : "#ef4444";
