import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/content/ArticleGrid";

export const metadata: Metadata = {
  title: "Piyasa Analizleri",
  description: "Hisse senedi, tahvil ve döviz piyasalarına dair güncel analizler.",
  alternates: { canonical: "/blog/piyasa-analizleri" },
};

const articles = [
  { title: "BIST 100'de teknik görünüm: dirençler ve destekler", excerpt: "Endekste kısa vadeli teknik seviyeleri değerlendiriyoruz.", date: "22.07.2026", tag: "Hisse", readTime: "4 dk" },
  { title: "Faiz kararı sonrası tahvil piyasası", excerpt: "TCMB kararının sabit getirili enstrümanlara etkileri.", date: "23.07.2026", tag: "Tahvil", readTime: "5 dk" },
  { title: "Döviz kurlarında haftalık görünüm", excerpt: "USD/TRY ve EUR/TRY paritelerinde beklentiler.", date: "21.07.2026", tag: "Döviz", readTime: "3 dk" },
  { title: "Bankacılık sektörü bilanço sezonu", excerpt: "Çeyrek sonuçları ve sektör değerlemeleri.", date: "20.07.2026", tag: "Hisse", readTime: "6 dk" },
  { title: "Altın ve emtialarda trend analizi", excerpt: "Küresel emtia fiyatlarının portföylere yansıması.", date: "19.07.2026", tag: "Emtia", readTime: "4 dk" },
  { title: "Serbest fonlarda risk yönetimi", excerpt: "Oynak piyasalarda pozisyon yönetimi yaklaşımları.", date: "18.07.2026", tag: "Strateji", readTime: "5 dk" },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Piyasa Analizleri"
        desc="Piyasaları farklı açılardan değerlendiren uzman içerikleri."
        breadcrumb={[{ label: "Blog", href: "/blog" }, { label: "Piyasa Analizleri" }]}
      />
      <Section className="py-12">
        <ArticleGrid articles={articles} />
      </Section>
    </>
  );
}
