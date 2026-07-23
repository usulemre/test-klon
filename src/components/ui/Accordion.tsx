"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type AccordionItem = { q: string; a: ReactNode; category?: string };

// Aranabilir akordiyon — SSS ve içerik sayfaları için.
export function Accordion({ items, searchable = false }: { items: AccordionItem[]; searchable?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = query
    ? items.filter((it) =>
        (typeof it.q === "string" ? it.q : "")
          .toLocaleLowerCase("tr")
          .includes(query.toLocaleLowerCase("tr")),
      )
    : items;

  return (
    <div>
      {searchable && (
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sorularda ara…"
          className="mb-4 h-11 w-full rounded-full border border-navy-200 px-4 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      )}
      <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
        {filtered.map((it, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-navy-900">{it.q}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                className={`shrink-0 text-navy-400 transition-transform ${open === i ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open === i && <div className="px-5 pb-5 text-sm leading-relaxed text-navy-600">{it.a}</div>}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-5 py-6 text-center text-sm text-navy-500">Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
}
