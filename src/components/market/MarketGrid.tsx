"use client";

import { indices } from "@/lib/market/data";
import { MarketCard } from "./MarketCard";
import { funds } from "@/lib/funds/funds";
import { FundCard } from "@/components/funds/FundCard";

// Ana sayfa canlı piyasa bloğu (referans görsel: koyu kart grid'i).
export function MarketGrid({ symbols }: { symbols?: string[] }) {
  const list = symbols ?? indices.map((i) => i.symbol);
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <MarketCard key={s} symbol={s} />
      ))}
    </div>
  );
}

export function FundCardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {funds.map((f) => (
        <FundCard key={f.slug} fund={f} />
      ))}
    </div>
  );
}
