import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, CTA } from "@/components/ui/primitives";
import { mainNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Bireysel portföy yönetimi, kurumsal portföy yönetimi ve alternatif yatırımlar.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  const children = mainNav.find((n) => n.href === "/hizmetler")?.children ?? [];
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        desc="Yatırımcı tipinize ve hedeflerinize göre tasarlanmış portföy yönetim çözümleri."
        pathname="/hizmetler"
      />
      <Section className="py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {children.map((c, i) => (
            <div key={c.href} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
              <span className="text-3xl text-gold-500">{["◈", "▣", "◆"][i]}</span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{c.label}</h3>
              <p className="mt-2 flex-1 text-sm text-navy-600">{c.desc}</p>
              <Link href={c.href} className="mt-5 inline-block text-sm font-semibold text-gold-600 hover:text-gold-700">Detaylı Bilgi →</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Size uygun modeli birlikte belirleyelim</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-200">Yatırımcı profilinize göre en doğru stratejiyi öneren sihirbazımızı deneyin.</p>
          <div className="mt-6 flex justify-center gap-3">
            <CTA href="/yatirimci-ol" variant="gold">Yatırımcı Ol</CTA>
            <CTA href="/iletisim" variant="dark">Bize Ulaşın</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
