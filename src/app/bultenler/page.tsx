import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Bültenler & Analiz",
  description: "Günlük, haftalık ve aylık bültenler, fon bültenleri ve ekonomik veri takvimi.",
  alternates: { canonical: "/bultenler" },
};

const cards = [
  { title: "Günlük / Haftalık / Aylık Bültenler", href: "/bultenler/gunluk-haftalik-aylik", desc: "Piyasa özetleri ve strateji notları." },
  { title: "Fon Bültenleri", href: "/bultenler/fon-bultenleri", desc: "Her fonun aylık performans ve strateji notu." },
  { title: "Veri Takvimi", href: "/bultenler/veri-takvimi", desc: "Yurt içi ve yurt dışı ekonomik veri takvimi." },
  { title: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi", desc: "Makroekonomik yorumlar ve değerlendirmeler." },
];

export default function Page() {
  return (
    <>
      <PageHero title="Bültenler & Analiz" desc="Piyasaları takip etmeniz için düzenli içerikler." pathname="/bultenler" />
      <Section className="py-12">
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600">{c.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{c.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-navy-500 group-hover:text-gold-600">Aç →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
