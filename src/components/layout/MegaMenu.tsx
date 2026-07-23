"use client";

import Link from "next/link";
import { funds } from "@/lib/funds/funds";
import { FundPriceRow, MiniPriceChart } from "@/components/market/MiniPriceChart";

// Fonlar mega menüsü — rapor §6: 3 sütun.
// Sütun 1: fon listesi + canlı performans · Sütun 2: ortak dokümanlar ·
// Sütun 3: "Fon Karşılaştır" CTA + canlı fiyat mini-grafik.
export function MegaMenu() {
  return (
    <div className="grid w-[720px] grid-cols-3 gap-6 p-6">
      {/* Sütun 1 — Fonlar */}
      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-navy-400">Fonlarımız</p>
        <div className="flex flex-col">
          {funds.map((f) => (
            <FundPriceRow key={f.slug} symbol={f.symbol} href={`/fonlar/${f.slug}`} name={f.shortName} />
          ))}
        </div>
        <Link href="/fonlar" className="mt-2 inline-block px-2 text-sm font-semibold text-navy-600 hover:text-gold-600">
          Tüm fonları gör →
        </Link>
      </div>

      {/* Sütun 2 — Ortak dokümanlar */}
      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-navy-400">Ortak Dokümanlar</p>
        <ul className="flex flex-col gap-1 text-sm">
          {[
            { label: "İzahnameler", href: "/fonlar" },
            { label: "KAP Bildirimleri", href: "/fonlar" },
            { label: "Bağımsız Denetim Raporları", href: "/fonlar" },
            { label: "Performans Raporları", href: "/fonlar/performans-raporlari" },
            { label: "Fon Bültenleri", href: "/bultenler/fon-bultenleri" },
            { label: "Veri Takvimi", href: "/bultenler/veri-takvimi" },
          ].map((d) => (
            <li key={d.label}>
              <Link href={d.href} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-navy-700 transition-colors hover:bg-navy-50">
                <span className="text-gold-500">›</span>
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sütun 3 — Karşılaştır CTA + canlı fiyat grafiği */}
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-navy-400">Anlık Fiyat</p>
        <MiniPriceChart symbol="ANK" />
        <Link
          href="/fonlar/karsilastir"
          className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Fon Karşılaştır
        </Link>
        <Link
          href="/yatirimci-rehberi"
          className="text-center text-xs font-medium text-navy-500 hover:text-gold-600"
        >
          Hangi fon bana uygun? →
        </Link>
      </div>
    </div>
  );
}
