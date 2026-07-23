"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useQuote } from "@/lib/market/useLivePrices";
import { formatPercent, formatValue } from "@/lib/market/data";
import { Sparkline } from "./Sparkline";

// Referans görseldeki koyu piyasa kartı: rozet, ad, değer, % değişim, sparkline.
export function MarketCard({ symbol }: { symbol: string }) {
  const quote = useQuote(symbol);
  const prev = useRef<number | undefined>(undefined);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (!quote) return;
    if (prev.current !== undefined && quote.value !== prev.current) {
      setFlash(quote.value > prev.current ? "up" : "down");
      const t = setTimeout(() => setFlash(null), 600);
      prev.current = quote.value;
      return () => clearTimeout(t);
    }
    prev.current = quote.value;
  }, [quote]);

  if (!quote) return <div className="h-[132px] animate-pulse rounded-2xl bg-market-card" />;

  const up = quote.changePct >= 0;
  const color = up ? "var(--color-market-up)" : "var(--color-market-down)";
  const inst = quote.instrument;

  const body = (
    <div
      className={`group relative flex flex-col gap-2 rounded-2xl border border-market-border bg-market-card p-4 transition-colors ${
        flash === "up" ? "flash-up" : flash === "down" ? "flash-down" : ""
      } ${inst.href ? "hover:border-gold-500/50" : ""}`}
    >
      <div className="flex items-center gap-2">
        <span
          className="flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-white"
          style={{ backgroundColor: up ? "#155e3b" : "#6b2020" }}
        >
          {inst.badge}
        </span>
        <span className="text-sm font-semibold text-white">{inst.name}</span>
        <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-market-muted">
          {inst.unit}
        </span>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="font-mono text-lg font-semibold tabular-nums text-white">
            {formatValue(quote.value, inst.unit)}
          </div>
          <div className="text-xs font-semibold tabular-nums" style={{ color }}>
            {up ? "▲" : "▼"} {formatPercent(quote.changePct)} <span className="text-market-muted">bugün</span>
          </div>
        </div>
        <Sparkline data={quote.series} width={96} height={44} color={color} />
      </div>
    </div>
  );

  if (inst.href) {
    return (
      <Link href={inst.href} aria-label={`${inst.name} detay`}>
        {body}
      </Link>
    );
  }
  return body;
}
