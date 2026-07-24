"use client";

import { useMarketOpen } from "@/lib/market/useLivePrices";
import { lastSessionLabel } from "@/lib/market/data";

// Borsa İstanbul seans durumu rozeti.
// Seans açık → canlı (yanıp sönen yeşil nokta), kapalı → son kapanış (donuk nokta).
// open, SSR/ilk paint'te false; provider mount sonrası gerçek duruma çeker (hydration güvenli).
export function MarketStatusBadge({
  variant = "panel",
  className = "",
}: {
  variant?: "panel" | "ticker";
  className?: string;
}) {
  const open = useMarketOpen();
  const dotClass = open ? "animate-pulse bg-market-up" : "bg-market-muted";

  const label =
    variant === "ticker"
      ? open
        ? "Canlı Piyasa"
        : "Piyasa Kapalı"
      : open
        ? "Gerçek zamanlı"
        : `Kapanış · ${lastSessionLabel()}`;

  return (
    <span className={className}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
}
