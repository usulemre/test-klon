"use client";

import Link from "next/link";
import { useQuote } from "@/lib/market/useLivePrices";
import { formatPercent, formatValue } from "@/lib/market/data";
import { Sparkline } from "./Sparkline";

// Mega menü sütun 3 için kompakt canlı fiyat grafiği + canlı satır listesi.
export function MiniPriceChart({ symbol }: { symbol: string }) {
  const quote = useQuote(symbol);
  if (!quote) return <div className="h-24 animate-pulse rounded-xl bg-market-card" />;
  const up = quote.changePct >= 0;
  const color = up ? "var(--color-market-up)" : "var(--color-market-down)";

  return (
    <div className="rounded-xl border border-market-border bg-market-bg p-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold text-white">{quote.instrument.name}</span>
        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-market-muted">
          canlı
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="font-mono text-base font-semibold tabular-nums text-white">
            ₺{formatValue(quote.value, quote.instrument.unit)}
          </div>
          <div className="text-[11px] font-semibold tabular-nums" style={{ color }}>
            {up ? "▲" : "▼"} {formatPercent(quote.changePct)}
          </div>
        </div>
        <Sparkline data={quote.series} width={92} height={38} color={color} />
      </div>
    </div>
  );
}

// Mega menüde fon satırı (ad + canlı fiyat/değişim etiketi)
export function FundPriceRow({ symbol, href, name }: { symbol: string; href: string; name: string }) {
  const quote = useQuote(symbol);
  const up = (quote?.changePct ?? 0) >= 0;
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-navy-50"
    >
      <span className="text-sm font-medium text-navy-800">{name}</span>
      {quote && (
        <span
          className="shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-semibold tabular-nums"
          style={{
            color: up ? "#15803d" : "#b91c1c",
            backgroundColor: up ? "#dcfce7" : "#fee2e2",
          }}
        >
          {up ? "+" : ""}
          {quote.changePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
        </span>
      )}
    </Link>
  );
}
