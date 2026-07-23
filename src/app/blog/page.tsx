import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Blog",
  description: "Vega Portföy blog — piyasa analizleri ve ekonomi köşesi.",
  alternates: { canonical: "/blog" },
};

const categories = [
  { title: "Piyasa Analizleri", href: "/blog/piyasa-analizleri", desc: "Hisse, tahvil ve döviz piyasalarına dair değerlendirmeler." },
  { title: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi", desc: "Makroekonomik gelişmeler ve uzman yorumları." },
];

export default function Page() {
  return (
    <>
      <PageHero title="Blog" desc="Piyasa ve ekonomi üzerine güncel içerikler." pathname="/blog" />
      <Section className="py-12">
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600">{c.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{c.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-navy-500 group-hover:text-gold-600">Yazıları Gör →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
