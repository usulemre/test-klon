"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { funds } from "@/lib/funds/funds";

// Mobil hamburger menü — sade, kayan panel + akordiyon. Otomatik odaklı input YOK
// (klavye kendiliğinden açılmasın). Arama, /arama sayfasına giden bir satırdır.
export function MobileMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  // Fonlar mega menüsünü mobilde düz listeye indir; Ana Sayfa'yı ayrı ele al
  const items = mainNav
    .filter((i) => i.href !== "/")
    .map((i) =>
      i.mega
        ? {
            ...i,
            children: [
              ...funds.map((f) => ({ label: f.shortName, href: `/fonlar/${f.slug}` })),
              { label: "Fon Karşılaştırma", href: "/fonlar/karsilastir" },
              { label: "Tüm Fonlar", href: "/fonlar" },
            ],
          }
        : i,
    );

  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

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
        <div className="fixed inset-0 z-[70] lg:hidden">
          {/* Backdrop */}
          <button
            aria-label="Menüyü kapat"
            onClick={closeMenu}
            className={`absolute inset-0 h-full w-full bg-navy-950/60 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
          />

          {/* Panel */}
          <div
            className={`absolute right-0 top-0 flex h-[100dvh] w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
              show ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Başlık */}
            <div className="flex shrink-0 items-center justify-between border-b border-navy-100 px-4 py-4">
              <span className="text-base font-bold text-navy-900">
                Test Klon <span className="text-gold-600">Portföy</span>
              </span>
              <button
                onClick={closeMenu}
                aria-label="Kapat"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-600 transition-colors hover:bg-navy-50"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Arama satırı (input değil — klavye açılmaz) */}
            <Link
              href="/arama"
              onClick={closeMenu}
              className="mx-4 mt-4 flex shrink-0 items-center gap-2 rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-400 transition-colors hover:border-navy-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Fon, doküman veya sayfa ara…
            </Link>

            {/* Menü linkleri */}
            <nav className="mt-2 flex-1 overflow-y-auto overscroll-contain px-2 pb-2">
              {items.map((item) => {
                const isOpen = expanded === item.label;
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-3 py-3.5 text-[15px] font-medium transition-colors hover:bg-navy-50 ${
                        active(item.href) ? "text-gold-600" : "text-navy-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-[15px] font-medium transition-colors hover:bg-navy-50 ${
                        active(item.href) ? "text-gold-600" : "text-navy-900"
                      }`}
                    >
                      {item.label}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 12 12"
                        className={`text-navy-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <ul className="mb-1 ml-3 space-y-0.5 border-l border-navy-100 pl-3">
                        <li>
                          <Link href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-500 hover:bg-navy-50">
                            Tümünü Gör
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={closeMenu}
                              className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-navy-50 ${
                                active(c.href) ? "font-semibold text-gold-600" : "text-navy-700"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Alt aksiyonlar */}
            <div className="shrink-0 space-y-2 border-t border-navy-100 p-4">
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
                  className="flex items-center justify-center rounded-xl border border-navy-200 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                >
                  Bize Ulaşın
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center rounded-xl bg-navy-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
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
