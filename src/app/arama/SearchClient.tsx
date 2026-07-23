"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { searchSite, searchTypes, type SearchDocType } from "@/lib/search";

// Site içi arama sonuç sayfası — filtrelenebilir (rapor §7: fon adı, doküman türü, tarih).
export function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const [type, setType] = useState<SearchDocType | "Tümü">("Tümü");

  const results = searchSite(q, type);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/arama?q=${encodeURIComponent(q)}`);
        }}
        className="flex gap-2"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Fon, doküman veya sayfa ara…"
          className="h-12 flex-1 rounded-full border border-navy-200 px-5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          autoFocus
        />
        <button className="rounded-full bg-navy-900 px-6 text-sm font-semibold text-white hover:bg-navy-800">Ara</button>
      </form>

      {/* Tür filtreleri */}
      <div className="mt-4 flex flex-wrap gap-2">
        {(["Tümü", ...searchTypes] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              type === t ? "border-navy-900 bg-navy-900 text-white" : "border-navy-200 text-navy-600 hover:border-navy-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Sonuçlar */}
      <div className="mt-6">
        {q && (
          <p className="mb-3 text-sm text-navy-500">
            <strong className="text-navy-900">{results.length}</strong> sonuç bulundu
            {q ? ` — "${q}"` : ""}
          </p>
        )}
        {results.length > 0 ? (
          <ul className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
            {results.map((r, i) => (
              <li key={i}>
                <Link href={r.href} className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-navy-50">
                  <div>
                    <p className="font-medium text-navy-900">{r.title}</p>
                    <p className="text-sm text-navy-500">{r.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="rounded-full bg-navy-100 px-2.5 py-1 text-[11px] font-semibold text-navy-700">{r.type}</span>
                    {r.date && <p className="mt-1 text-xs text-navy-400">{r.date}</p>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center text-navy-500">
            {q ? "Aramanızla eşleşen sonuç bulunamadı." : "Aramaya başlamak için bir kelime yazın."}
          </p>
        )}
      </div>
    </div>
  );
}
