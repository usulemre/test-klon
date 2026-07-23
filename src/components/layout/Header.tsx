"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { SearchBox } from "@/components/ui/SearchBox";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

// Sticky header — kaydırmada daralır (rapor sticky header önerisi).
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all ${
        scrolled ? "border-navy-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4">
        <div className={`transition-all ${scrolled ? "py-2" : "py-3"}`}>
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="ml-4 hidden items-center lg:flex" onMouseLeave={() => setOpenMenu(null)}>
          {mainNav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-gold-600"
              >
                {item.label}
                {(item.children || item.mega) && (
                  <svg width="10" height="10" viewBox="0 0 12 12" className="mt-0.5 text-navy-400">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {/* Mega menü (Fonlar) */}
              {item.mega && openMenu === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl">
                    <MegaMenu />
                  </div>
                </div>
              )}

              {/* Standart dropdown */}
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <ul className="min-w-64 overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-xl">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-xl px-3 py-2 transition-colors hover:bg-navy-50">
                          <span className="block text-sm font-medium text-navy-900">{c.label}</span>
                          {c.desc && <span className="block text-xs text-navy-500">{c.desc}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <SearchBox />
          </div>
          <Link
            href="/yatirimci-ol"
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 sm:inline-block"
          >
            Yatırımcı Ol
          </Link>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
