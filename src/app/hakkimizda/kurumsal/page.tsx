import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Test Klon Portföy Yönetimi A.Ş. kurumsal kimliği, faaliyet alanları ve düzenleyici çerçevesi.",
  alternates: { canonical: "/hakkimizda/kurumsal" },
};

export default function Page() {
  return (
    <ContentPage
      title="Kurumsal"
      desc="Test Klon Portföy Yönetimi A.Ş. hakkında kurumsal bilgiler."
      pathname="/hakkimizda/kurumsal"
      intro={`${site.legalName}, Sermaye Piyasası Kurulu (SPK) düzenlemeleri çerçevesinde portföy yönetimi ve yatırım fonu kuruculuğu faaliyetlerini yürüten bir portföy yönetim şirketidir.`}
      cta={{ label: "İletişime Geçin", href: "/iletisim" }}
      sections={[
        {
          heading: "Faaliyet Alanlarımız",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Bireysel ve kurumsal portföy yönetimi</li>
              <li>Serbest (hedge) fon kuruculuğu ve yönetimi</li>
              <li>Hisse senedi ve sabit getirili fon yönetimi</li>
              <li>Alternatif yatırım çözümleri ve danışmanlık</li>
            </ul>
          ),
        },
        {
          heading: "Düzenleyici Çerçeve",
          body: (
            <p>
              Şirketimiz SPK, Borsa İstanbul (BIST) ve Merkezi Kayıt Kuruluşu (MKK) düzenlemelerine tabidir.
              Tüm faaliyetlerimiz ilgili mevzuata ve iç kontrol/uyum politikalarımıza uygun olarak yürütülür.
            </p>
          ),
        },
        {
          heading: "Yaklaşımımız",
          body: (
            <p>
              Yatırımcı çıkarını önceleyen, risk yönetimi odaklı ve şeffaf bir yönetim anlayışını benimsiyoruz.
              Portföy kararlarımız disiplinli bir yatırım süreci ve bağımsız denetim ile desteklenir.
            </p>
          ),
        },
      ]}
    />
  );
}
