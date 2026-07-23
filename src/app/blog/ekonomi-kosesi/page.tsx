import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/content/ArticleGrid";

export const metadata: Metadata = {
  title: "Ekonomi Köşesi",
  description: "Makroekonomik gelişmeler ve uzman ekonomi yorumları.",
  alternates: { canonical: "/blog/ekonomi-kosesi" },
};

const articles = [
  { title: "Enflasyon patikası ve para politikası", excerpt: "Fiyat istikrarı hedeflerinde son durum.", date: "23.07.2026", tag: "Makro", readTime: "6 dk" },
  { title: "Küresel merkez bankaları takvimi", excerpt: "Fed ve ECB kararlarının gelişen piyasalara etkisi.", date: "22.07.2026", tag: "Global", readTime: "5 dk" },
  { title: "Büyüme verileri ne söylüyor?", excerpt: "GSYH bileşenleri ve öncü göstergeler.", date: "20.07.2026", tag: "Makro", readTime: "4 dk" },
  { title: "Cari denge ve dış ticaret", excerpt: "Dış dengedeki eğilimler ve kur etkisi.", date: "18.07.2026", tag: "Makro", readTime: "5 dk" },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Ekonomi Köşesi"
        desc="Makroekonomik tabloyu sadeleştiren yorumlar."
        breadcrumb={[{ label: "Blog", href: "/blog" }, { label: "Ekonomi Köşesi" }]}
      />
      <Section className="py-12">
        <ArticleGrid articles={articles} />
      </Section>
    </>
  );
}
