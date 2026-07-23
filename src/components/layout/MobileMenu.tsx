"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { funds } from "@/lib/funds/funds";
import { SearchBox } from "@/components/ui/SearchBox";

// Mobil menü — hamburger + akordiyon; üstte sabit Ara & Bize Ulaşın (rapor mobil menü).
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fonlar mega menüsünü mobilde tek seviye liste olarak indir
  const navForMobile = mainNav.map((item) =>
    item.mega
      ? { ...item, children: funds.map((f) => ({ label: f.shortName, href: `/fonlar/${f.slug}` })).concat([{ label: "Fon Karşılaştırma", href: "/fonlar/karsilastir" }, { label: "Tüm Fonlar", href: "/fonlar" }]) }
      : item,
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Menüyü aç"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            {/* Üst sabit çubuk */}
            <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3">
              <span className="font-bold text-navy-900">Menü</span>
              <button onClick={() => setOpen(false)} aria-label="Kapat" className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-700 hover:bg-navy-50">
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Sabit Ara + Bize Ulaşın */}
            <div className="flex flex-col gap-2 border-b border-navy-100 px-4 py-3">
              <div onClick={() => setOpen(false)}>
                <SearchBox variant="inline" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/iletisim" onClick={() => setOpen(false)} className="rounded-full bg-navy-900 py-2 text-center text-sm font-semibold text-white">
                  Bize Ulaşın
                </Link>
                <Link href="/yatirimci-ol" onClick={() => setOpen(false)} className="rounded-full bg-gold-500 py-2 text-center text-sm font-semibold text-navy-950">
                  Yatırımcı Ol
                </Link>
              </div>
            </div>

            {/* Akordiyon menü */}
            <nav className="flex-1 overflow-y-auto px-2 py-2">
              {navForMobile.map((item) => (
                <div key={item.label} className="border-b border-navy-50">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between px-2 py-3 text-left font-medium text-navy-900"
                      >
                        {item.label}
                        <svg width="14" height="14" viewBox="0 0 12 12" className={`text-navy-400 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}>
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {expanded === item.label && (
                        <ul className="pb-2">
                          <li>
                            <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2 text-sm font-semibold text-navy-600">
                              {item.label} — Genel
                            </Link>
                          </li>
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2 text-sm text-navy-700 hover:bg-navy-50">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setOpen(false)} className="block px-2 py-3 font-medium text-navy-900">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Alt sabit çubuk — Ara / Telefon Et */}
            <div className="grid grid-cols-2 gap-2 border-t border-navy-100 p-3">
              <Link href="/arama" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border border-navy-200 py-2.5 text-sm font-semibold text-navy-800">
                Ara
              </Link>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 py-2.5 text-sm font-semibold text-white">
                Telefon Et
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
