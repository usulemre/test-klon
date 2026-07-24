import Link from "next/link";
import { fundNavSeries, fundPriceDate, getFundBySymbol } from "@/lib/funds/funds";
import { formatValue } from "@/lib/market/data";
import { Sparkline } from "./Sparkline";

// Mega menü sütun 3 için kompakt günlük pay fiyatı grafiği.
// Fon fiyatları canlı değildir; bir önceki iş gününe göre belirlenir.
export function MiniPriceChart({ symbol }: { symbol: string }) {
  const fund = getFundBySymbol(symbol);
  if (!fund) return <div className="h-24 animate-pulse rounded-xl bg-market-card" />;
  const up = fund.dailyChangePct >= 0;
  const color = up ? "var(--color-market-up)" : "var(--color-market-down)";

  return (
    <div className="rounded-xl border border-market-border bg-market-bg p-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold text-white">{fund.shortName}</span>
        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-market-muted">
          {fundPriceDate}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="font-mono text-base font-semibold tabular-nums text-white">
            ₺{formatValue(fund.navPrice, "₺")}
          </div>
          <div className="text-[11px] font-semibold tabular-nums" style={{ color }}>
            {up ? "▲" : "▼"} %{fund.dailyChangePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <Sparkline data={fundNavSeries(fund)} width={92} height={38} color={color} />
      </div>
    </div>
  );
}

// Mega menüde fon satırı (ad + günlük değişim etiketi)
export function FundPriceRow({ symbol, href, name }: { symbol: string; href: string; name: string }) {
  const fund = getFundBySymbol(symbol);
  const up = (fund?.dailyChangePct ?? 0) >= 0;
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-navy-50"
    >
      <span className="text-sm font-medium text-navy-800">{name}</span>
      {fund && (
        <span
          className="shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-semibold tabular-nums"
          style={{
            color: up ? "#15803d" : "#b91c1c",
            backgroundColor: up ? "#dcfce7" : "#fee2e2",
          }}
        >
          {up ? "+" : ""}
          {fund.dailyChangePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
        </span>
      )}
    </Link>
  );
}
