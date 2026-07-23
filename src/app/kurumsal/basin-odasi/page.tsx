import type { Metadata } from "next";
import { PageHero, Section, CTA } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/content/ArticleGrid";

export const metadata: Metadata = {
  title: "Basın Odası",
  description: "Vega Portföy kurumsal haberleri, basın bültenleri ve medya kiti.",
  alternates: { canonical: "/kurumsal/basin-odasi" },
};

const news = [
  { title: "Vega Portföy yönetilen varlık büyüklüğünde rekor kırdı", excerpt: "Toplam AUM 14 milyar TL'yi aştı.", date: "15.07.2026", tag: "Basın Bülteni", readTime: "2 dk" },
  { title: "Parla Serbest Fon ödül aldı", excerpt: "Yılın serbest fonu kategorisinde finalist.", date: "01.07.2026", tag: "Haber", readTime: "3 dk" },
  { title: "Sürdürülebilirlik raporumuz yayımlandı", excerpt: "ESG yaklaşımımızı detaylandırdık.", date: "20.06.2026", tag: "Basın Bülteni", readTime: "2 dk" },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Basın Odası"
        desc="Kurumsal haberler, basın bültenleri ve medya kaynakları."
        breadcrumb={[{ label: "Kurumsal" }, { label: "Basın Odası" }]}
      >
        <div className="mt-5 flex flex-wrap gap-3">
          <CTA href="/iletisim" variant="primary">Basın İletişimi</CTA>
          <button className="rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-navy-900">Medya Kiti (Logo & Görseller) ↓</button>
        </div>
      </PageHero>
      <Section className="py-12">
        <ArticleGrid articles={news} />
      </Section>
    </>
  );
}
