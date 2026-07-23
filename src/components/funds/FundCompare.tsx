"use client";

import { useState } from "react";
import Link from "next/link";
import { funds, riskColor } from "@/lib/funds/funds";
import { useMarket } from "@/lib/market/useLivePrices";
import { formatValue } from "@/lib/market/data";

// Fon karşılaştırma aracı — rapor "Fon Karşılaştırma Aracı [YENİ]".
export function FundCompare() {
  const [selected, setSelected] = useState<string[]>(funds.map((f) => f.slug));
  const { quotes } = useMarket();
  const active = funds.filter((f) => selected.includes(f.slug));

  function toggle(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  const rows: { label: string; render: (f: (typeof funds)[number]) => React.ReactNode }[] = [
    { label: "Fon Türü", render: (f) => f.type },
    { label: "Strateji", render: (f) => f.strategy },
    {
      label: "Pay Fiyatı (canlı)",
      render: (f) => {
        const q = quotes[f.symbol];
        return q ? <span className="font-mono tabular-nums">₺{formatValue(q.value, "₺")}</span> : "—";
      },
    },
    {
      label: "Günlük Değişim",
      render: (f) => {
        const q = quotes[f.symbol];
        if (!q) return "—";
        const up = q.changePct >= 0;
        return (
          <span className="font-semibold tabular-nums" style={{ color: up ? "#15803d" : "#b91c1c" }}>
            {up ? "+" : ""}
            {q.changePct.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
          </span>
        );
      },
    },
    {
      label: "Risk Değeri",
      render: (f) => (
        <span className="font-semibold" style={{ color: riskColor(f.riskLevel) }}>
          {f.riskLevel}/7 · {f.riskLabel}
        </span>
      ),
    },
    ...["1 Ay", "3 Ay", "YBB", "1 Yıl", "3 Yıl"].map((period) => ({
      label: `${period} Getiri`,
      render: (f: (typeof funds)[number]) => {
        const v = f.returns.find((r) => r.period === period)?.value ?? 0;
        return <span className="font-semibold text-market-up">+%{v.toLocaleString("tr-TR")}</span>;
      },
    })),
    { label: "Yönetim Ücreti", render: (f) => f.managementFee },
    { label: "Büyüklük (AUM)", render: (f) => f.aum },
    { label: "Kuruluş", render: (f) => f.inceptionDate },
  ];

  return (
    <div>
      {/* Seçim */}
      <div className="mb-6 flex flex-wrap gap-2">
        {funds.map((f) => {
          const on = selected.includes(f.slug);
          return (
            <button
              key={f.slug}
              onClick={() => toggle(f.slug)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on ? "border-navy-900 bg-navy-900 text-white" : "border-navy-200 text-navy-600 hover:border-navy-400"
              }`}
            >
              {on ? "✓ " : ""}
              {f.shortName}
            </button>
          );
        })}
      </div>

      {active.length === 0 ? (
        <p className="rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center text-navy-500">
          Karşılaştırmak için en az bir fon seçin.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-navy-100">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy-900 text-left text-white">
                <th className="sticky left-0 z-10 bg-navy-900 px-4 py-3 font-semibold">Özellik</th>
                {active.map((f) => (
                  <th key={f.slug} className="px-4 py-3 font-semibold">
                    <Link href={`/fonlar/${f.slug}`} className="hover:text-gold-400">
                      {f.shortName}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 ? "bg-navy-50/40" : "bg-white"}>
                  <th className="sticky left-0 z-10 whitespace-nowrap px-4 py-3 text-left font-medium text-navy-700" style={{ background: "inherit" }}>
                    {row.label}
                  </th>
                  {active.map((f) => (
                    <td key={f.slug} className="px-4 py-3 text-navy-800">
                      {row.render(f)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
