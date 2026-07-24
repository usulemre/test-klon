"use client";

import { useQuotes } from "@/lib/market/useLivePrices";
import { formatPercent, formatValue, indices } from "@/lib/market/data";
import { MarketStatusBadge } from "@/components/market/MarketStatusBadge";

// Header üstü kayan canlı endeks şeridi (rapor: mobil/masaüstü sabit canlı veri).
export function TickerBar() {
  const quotes = useQuotes(indices.map((i) => i.symbol));
  const items = [...quotes, ...quotes]; // kesintisiz döngü için iki kez

  return (
    <div className="border-b border-market-border bg-market-bg text-white">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4">
        <MarketStatusBadge
          variant="ticker"
          className="hidden shrink-0 items-center gap-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-400 sm:flex"
        />
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker flex w-max gap-6 py-1.5">
            {items.map((q, i) => {
              const up = q.changePct >= 0;
              return (
                <span key={i} className="flex shrink-0 items-center gap-1.5 text-xs tabular-nums">
                  <span className="font-semibold text-white">{q.instrument.name}</span>
                  <span className="text-market-muted">{formatValue(q.value, q.instrument.unit)}</span>
                  <span className="font-semibold" style={{ color: up ? "var(--color-market-up)" : "var(--color-market-down)" }}>
                    {up ? "▲" : "▼"} {formatPercent(q.changePct)}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
