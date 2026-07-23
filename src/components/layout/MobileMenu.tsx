"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { funds } from "@/lib/funds/funds";
import { SearchBox } from "@/components/ui/SearchBox";

// Mobil menü — kayan panel, animasyonlu akordiyon, aktif sayfa vurgusu.
export function MobileMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false); // DOM'da mı
  const [show, setShow] = useState(false); // geçiş durumu (kayma)
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMounted(true);
    requestAnimationFrame(() => setShow(true));
  }, []);

  const closeMenu = useCallback(() => {
    setShow(false);
    closeTimer.current = setTimeout(() => setMounted(false), 300);
  }, []);

  // Panel açıkken arka plan kaydırmasını kilitle
  useEffect(() => {
    document.body.style.overflow = mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  // Fonlar mega menüsünü mobilde tek seviye listeye indir
  const navForMobile = mainNav
    .filter((item) => item.href !== "/")
    .map((item) =>
      item.mega
        ? {
            ...item,
            children: [
              ...funds.map((f) => ({ label: f.shortName, href: `/fonlar/${f.slug}` })),
              { label: "Fon Karşılaştırma", href: "/fonlar/karsilastir" },
              { label: "Tüm Fonlar", href: "/fonlar" },
            ],
          }
        : item,
    );

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <>
      <button
        onClick={openMenu}
        aria-label="Menüyü aç"
        aria-expanded={mounted}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {mounted && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Panel */}
          <div
            className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
              show ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Başlık */}
            <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900">
                  <span className="flex items-end gap-[2px]">
                    <span className="h-2 w-1 rounded-sm bg-white" />
                    <span className="h-3 w-1 rounded-sm bg-white" />
                    <span className="h-4 w-1 rounded-sm bg-gold-500" />
                  </span>
                </span>
                <span className="text-sm font-bold text-navy-900">Test Klon <span className="text-gold-600">Portföy</span></span>
              </span>
              <button
                onClick={closeMenu}
                aria-label="Menüyü kapat"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Arama */}
            <div className="border-b border-navy-100 px-4 py-3">
              <SearchBox variant="inline" />
            </div>

            {/* Akordiyon menü */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-2">
              {navForMobile.map((item) => {
                const open = expanded === item.label;
                return (
                  <div key={item.label} className="border-b border-navy-50 last:border-0">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setExpanded(open ? null : item.label)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium transition-colors ${
                            isActive(item.href) ? "text-gold-600" : "text-navy-900"
                          }`}
                        >
                          {item.label}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 12 12"
                            className={`text-navy-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                          >
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {/* Yumuşak açılan içerik (grid-rows 0fr→1fr) */}
                        <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <ul className="overflow-hidden pl-3">
                            <li>
                              <Link href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-600 hover:bg-navy-50">
                                Tümüne Bak →
                              </Link>
                            </li>
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  onClick={closeMenu}
                                  className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-navy-50 ${
                                    isActive(c.href) ? "font-semibold text-gold-600" : "text-navy-700"
                                  }`}
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block rounded-lg px-3 py-3 font-medium transition-colors hover:bg-navy-50 ${
                          isActive(item.href) ? "text-gold-600" : "text-navy-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Alt aksiyon çubuğu */}
            <div className="space-y-2 border-t border-navy-100 p-3">
              <Link
                href="/yatirimci-ol"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-xl bg-gold-500 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                Yatırımcı Ol
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/iletisim"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-navy-200 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16v12H5.2L4 17.2V4Z" />
                  </svg>
                  Bize Ulaşın
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-navy-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 5c0 8.3 6.7 15 15 15v-3.5l-4-1.5-2 2a12 12 0 0 1-6-6l2-2L7.5 5H4Z" />
                  </svg>
                  Telefon Et
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
