"use client";

import { useState } from "react";
import type { Fund, FundDoc } from "@/lib/funds/funds";
import { fundNavSeries, fundPerformanceSeries, fundPriceDate } from "@/lib/funds/funds";
import { formatValue } from "@/lib/market/data";
import { AreaChart } from "@/components/market/AreaChart";
import { Sparkline } from "@/components/market/Sparkline";

// Tek sekmeli fon detay (rapor: "8 alt sayfa → tek sekmeli sayfa").
const tabs = ["Performans", "İçtüzük", "İzahname", "Raporlar", "KAP", "Denetim", "Duyuru"] as const;
type Tab = (typeof tabs)[number];

export function FundDetail({ fund }: { fund: Fund }) {
  const [tab, setTab] = useState<Tab>("Performans");
  const up = fund.dailyChangePct >= 0;
  const perf = fundPerformanceSeries(fund);
  const navSeries = fundNavSeries(fund);
  const color = up ? "var(--color-market-up)" : "var(--color-market-down)";

  return (
    <div>
      {/* Pay fiyatı başlığı — fon fiyatları günlük belirlenir */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white" style={{ backgroundColor: fund.color }}>
              {fund.code}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-navy-400">Güncel Pay Fiyatı</p>
              <p className="font-mono text-2xl font-bold tabular-nums text-navy-900">
                ₺{formatValue(fund.navPrice, "₺")}
              </p>
              <p className="text-sm font-semibold tabular-nums" style={{ color }}>
                {up ? "▲" : "▼"} {fund.dailyChangePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}% günlük
              </p>
              <p className="mt-1 text-xs text-navy-400">{fundPriceDate} değerlemesi · fiyatlar her iş günü belirlenir</p>
            </div>
          </div>
          <Sparkline data={navSeries} width={160} height={56} color={color} />
        </div>

        {/* Getiri özeti */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {fund.returns.map((r) => (
            <div key={r.period} className="rounded-xl bg-navy-50 p-3 text-center">
              <p className="text-[11px] text-navy-400">{r.period}</p>
              <p className="font-semibold text-market-up">+%{r.value.toLocaleString("tr-TR")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sekmeler */}
      <div className="mt-6 flex flex-wrap gap-1 border-b border-navy-100">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "text-navy-900" : "text-navy-400 hover:text-navy-700"
            }`}
          >
            {t}
            {tab === t && <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold-500" />}
          </button>
        ))}
      </div>

      <div className="py-6">
        {tab === "Performans" && (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-3 font-semibold text-navy-900">Kümülatif Getiri (Son 1 Yıl)</h3>
              <div className="rounded-2xl border border-navy-100 bg-white p-4">
                <AreaChart data={perf} color={fund.color} valuePrefix="" valueSuffix="" />
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-navy-900">Portföy Dağılımı</h3>
              <div className="space-y-3 rounded-2xl border border-navy-100 bg-white p-4">
                {fund.allocation.map((a) => (
                  <div key={a.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-navy-700">{a.label}</span>
                      <span className="font-semibold text-navy-900">%{a.weight}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-navy-100">
                      <div className="h-full rounded-full" style={{ width: `${a.weight}%`, backgroundColor: fund.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "İçtüzük" && <DocList docs={fund.docs.ictuzuk} />}
        {tab === "İzahname" && <DocList docs={fund.docs.izahname} />}
        {tab === "Raporlar" && <DocList docs={fund.docs.raporlar} />}
        {tab === "KAP" && <DocList docs={fund.docs.kap} />}
        {tab === "Denetim" && <DocList docs={fund.docs.denetim} />}
        {tab === "Duyuru" && (
          <ul className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
            {fund.duyurular.map((d, i) => (
              <li key={i} className="flex items-center gap-4 px-5 py-4">
                <span className="text-xs font-medium text-navy-400">{d.date}</span>
                <span className="text-sm text-navy-800">{d.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function DocList({ docs }: { docs: FundDoc[] }) {
  return (
    <ul className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
      {docs.map((d, i) => (
        <li key={i} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-navy-50">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-[10px] font-bold text-white">{d.type}</span>
            <div>
              <p className="text-sm font-medium text-navy-900">{d.label}</p>
              <p className="text-xs text-navy-400">{d.date}</p>
            </div>
          </div>
          <button className="rounded-full border border-navy-200 px-4 py-1.5 text-xs font-semibold text-navy-700 hover:border-navy-900 hover:bg-white">
            İndir ↓
          </button>
        </li>
      ))}
    </ul>
  );
}
