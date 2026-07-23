import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui/primitives";
import { mainNav, footerNav } from "@/lib/site";
import { funds } from "@/lib/funds/funds";
import { legalDocs } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Site Haritası",
  description: "Vega Portföy web sitesinin tüm sayfalarına erişilebilir HTML site haritası.",
  alternates: { canonical: "/site-haritasi" },
};

// Erişilebilir HTML site haritası (rapor: "Site Haritası (HTML) [YENİ]").
export default function Page() {
  const groups: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Hakkımızda",
      links: mainNav.find((n) => n.href === "/hakkimizda")?.children ?? [],
    },
    {
      title: "Hizmetler",
      links: mainNav.find((n) => n.href === "/hizmetler")?.children ?? [],
    },
    {
      title: "Fonlar",
      links: [
        ...funds.map((f) => ({ label: f.shortName, href: `/fonlar/${f.slug}` })),
        { label: "Fon Karşılaştırma", href: "/fonlar/karsilastir" },
        { label: "Performans Raporları", href: "/fonlar/performans-raporlari" },
      ],
    },
    {
      title: "Bültenler & Analiz",
      links: [
        { label: "Günlük/Haftalık/Aylık", href: "/bultenler/gunluk-haftalik-aylik" },
        { label: "Fon Bültenleri", href: "/bultenler/fon-bultenleri" },
        { label: "Veri Takvimi", href: "/bultenler/veri-takvimi" },
      ],
    },
    {
      title: "Blog",
      links: [
        { label: "Piyasa Analizleri", href: "/blog/piyasa-analizleri" },
        { label: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { label: "Duyurular", href: "/kurumsal/duyurular" },
        { label: "Basın Odası", href: "/kurumsal/basin-odasi" },
        { label: "ESG / Sürdürülebilirlik", href: "/kurumsal/esg-surdurulebilirlik" },
      ],
    },
    {
      title: "Yatırımcı",
      links: [
        { label: "Yatırımcı Rehberi", href: "/yatirimci-rehberi" },
        { label: "Sık Sorulan Sorular", href: "/sss" },
        { label: "Yatırımcı Ol", href: "/yatirimci-ol" },
        { label: "İletişim", href: "/iletisim" },
      ],
    },
    {
      title: "Yasal Dokümanlar",
      links: Object.values(legalDocs).map((d) => ({ label: d.title, href: `/yasal/${d.slug}` })),
    },
  ];

  return (
    <>
      <PageHero title="Site Haritası" desc="Tüm sayfalarımıza tek sayfadan erişin." pathname="/site-haritasi" />
      <Section className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy-400">{g.title}</h2>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-navy-700 hover:text-gold-600">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy-400">Keşfet</h2>
            <ul className="space-y-2">
              {footerNav[4].links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-navy-700 hover:text-gold-600">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
