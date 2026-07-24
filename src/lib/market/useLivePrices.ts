"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { allInstruments, isMarketOpen, round, seedSeries, type Instrument } from "./data";

export type Quote = {
  instrument: Instrument;
  series: number[]; // sparkline noktaları (sonu = güncel)
  value: number; // güncel değer
  open: number; // günün ilk değeri
  change: number; // mutlak değişim
  changePct: number; // yüzde değişim
  dir: "up" | "down" | "flat"; // son tick yönü (flash için)
};

function buildInitial(inst: Instrument): Quote {
  const series = seedSeries(inst);
  const open = series[0];
  const value = series[series.length - 1];
  return {
    instrument: inst,
    series,
    value,
    open,
    change: round(value - open, inst.unit === "₺" ? 4 : 2),
    changePct: round(((value - open) / open) * 100, 2),
    dir: "flat",
  };
}

function tick(q: Quote): Quote {
  const inst = q.instrument;
  const digits = inst.unit === "₺" ? 4 : 2;
  const noise = (Math.random() - 0.48) * 2 * q.value * inst.volatility;
  const next = round(Math.max(q.value + noise, q.value * 0.5), digits);
  const series = [...q.series.slice(1), next];
  const dir = next > q.value ? "up" : next < q.value ? "down" : "flat";
  return {
    ...q,
    series,
    value: next,
    change: round(next - q.open, digits),
    changePct: round(((next - q.open) / q.open) * 100, 2),
    dir,
  };
}

type MarketState = { quotes: Record<string, Quote>; open: boolean };

const MarketContext = createContext<MarketState>({ quotes: {}, open: false });

export function MarketProvider({ children }: { children: ReactNode }) {
  // İlk render sunucu ile aynı (seeded) → hydration güvenli
  const [quotes, setQuotes] = useState<Record<string, Quote>>(() => {
    const init: Record<string, Quote> = {};
    for (const inst of allInstruments) init[inst.symbol] = buildInitial(inst);
    return init;
  });
  // SSR/ilk paint için güvenli varsayılan: kapalı. Mount sonrası gerçek duruma çekilir.
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Fiyat akışı yalnızca Borsa İstanbul seansı açıkken tick atar;
    // kapalıyken son kapanışta donar. Seans durumu her tick'te tazelenir.
    const evaluate = () => {
      const nowOpen = isMarketOpen();
      setOpen((prev) => (prev === nowOpen ? prev : nowOpen));
      return nowOpen;
    };
    evaluate();
    timer.current = setInterval(() => {
      if (!evaluate()) return; // seans kapalı → tick yok
      setQuotes((prev) => {
        const next: Record<string, Quote> = {};
        for (const key in prev) next[key] = tick(prev[key]);
        return next;
      });
    }, 3000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return createElement(MarketContext.Provider, { value: { quotes, open } }, children);
}

export function useMarket() {
  return useContext(MarketContext);
}

export function useMarketOpen(): boolean {
  return useContext(MarketContext).open;
}

export function useQuotes(symbols?: string[]): Quote[] {
  const { quotes } = useMarket();
  if (!symbols) return Object.values(quotes);
  return symbols.map((s) => quotes[s]).filter(Boolean);
}

export function useQuote(symbol: string): Quote | undefined {
  return useMarket().quotes[symbol];
}
