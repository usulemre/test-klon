import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Uyum ve Etik Politikaları",
  description: "İç kontrol, uyum, etik ilkeler ve çıkar çatışması politikamız.",
  alternates: { canonical: "/hakkimizda/uyum-ve-etik" },
};

export default function Page() {
  return (
    <ContentPage
      title="Uyum ve Etik Politikaları"
      desc="İç kontrol, uyum ve etik ilkelerimiz."
      pathname="/hakkimizda/uyum-ve-etik"
      intro="SPK denetimine tabi bir kurum olarak iç kontrol, uyum ve etik ilkelerimizi kurumsal güvenin temeli olarak görüyoruz."
      cta={{ label: "Uyum Birimine Ulaşın", href: "/iletisim" }}
      sections={[
        {
          heading: "İç Kontrol ve Uyum",
          body: <p>Bağımsız uyum birimimiz, tüm yatırım ve operasyon süreçlerinin ilgili mevzuata uygunluğunu sürekli olarak denetler ve raporlar.</p>,
        },
        {
          heading: "Çıkar Çatışması Politikası",
          body: <p>Yatırımcı çıkarının önceliğini korumak amacıyla olası çıkar çatışmalarını tanımlar, önler ve şeffaf biçimde yönetiriz.</p>,
        },
        {
          heading: "Etik İlkeler",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Dürüstlük ve şeffaflık</li>
              <li>Gizlilik ve veri güvenliği</li>
              <li>Adil ve eşit muamele</li>
              <li>Rüşvet ve yolsuzlukla mücadele</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
