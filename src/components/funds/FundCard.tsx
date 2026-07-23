"use client";

import Link from "next/link";
import type { Fund } from "@/lib/funds/funds";
import { riskColor } from "@/lib/funds/funds";
import { useQuote } from "@/lib/market/useLivePrices";
import { formatValue } from "@/lib/market/data";
import { Sparkline } from "@/components/market/Sparkline";

export function FundCard({ fund }: { fund: Fund }) {
  const quote = useQuote(fund.symbol);
  const up = (quote?.changePct ?? 0) >= 0;
  const ybb = fund.returns.find((r) => r.period === "YBB")?.value ?? 0;
  const color = up ? "var(--color-market-up)" : "var(--color-market-down)";

  return (
    <div className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: fund.color }}
          >
            {fund.code}
          </span>
          <h3 className="mt-2 text-base font-bold leading-snug text-navy-900">
            <Link href={`/fonlar/${fund.slug}`} className="hover:text-gold-600">
              {fund.shortName}
            </Link>
          </h3>
          <p className="text-xs text-navy-500">{fund.type}</p>
        </div>
        <span
          className="shrink-0 rounded-lg px-2 py-1 text-[11px] font-semibold"
          style={{ color: riskColor(fund.riskLevel), backgroundColor: `${riskColor(fund.riskLevel)}1a` }}
        >
          Risk {fund.riskLevel}/7
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-navy-400">Pay Fiyatı (canlı)</p>
          <p className="font-mono text-lg font-semibold tabular-nums text-navy-900">
            ₺{quote ? formatValue(quote.value, fund.currency === "TRY" ? "₺" : "") : "—"}
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color }}>
            {up ? "▲" : "▼"} {quote ? quote.changePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0,00"}% bugün
          </p>
        </div>
        {quote && <Sparkline data={quote.series} width={90} height={40} color={color} />}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-navy-50 pt-4 text-center">
        <div>
          <p className="text-[11px] text-navy-400">YBB Getiri</p>
          <p className="font-semibold text-market-up">+%{ybb.toLocaleString("tr-TR")}</p>
        </div>
        <div>
          <p className="text-[11px] text-navy-400">Büyüklük</p>
          <p className="font-semibold text-navy-800">{fund.aum}</p>
        </div>
      </div>

      <Link
        href={`/fonlar/${fund.slug}`}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-navy-50 py-2.5 text-sm font-semibold text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white"
      >
        Fonu İncele →
      </Link>
    </div>
  );
}
