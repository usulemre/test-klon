import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Ortaklık Yapısı",
  description: "Test Klon Portföy Yönetimi A.Ş. sermaye ve pay sahipliği yapısı.",
  alternates: { canonical: "/hakkimizda/ortaklik-yapisi" },
};

const owners = [
  { name: "Test Klon Holding A.Ş.", share: 68 },
  { name: "Kurucu Ortaklar", share: 22 },
  { name: "Diğer", share: 10 },
];

export default function Page() {
  return (
    <ContentPage
      title="Ortaklık Yapısı"
      desc="Sermaye ve pay dağılımı."
      pathname="/hakkimizda/ortaklik-yapisi"
      intro="Şirketimizin ödenmiş sermayesi ve pay sahipliği yapısı aşağıda özetlenmiştir."
    >
      <div className="space-y-4 rounded-2xl border border-navy-100 bg-white p-6">
        {owners.map((o) => (
          <div key={o.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium text-navy-800">{o.name}</span>
              <span className="font-semibold text-navy-900">%{o.share}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-navy-100">
              <div className="h-full rounded-full bg-navy-900" style={{ width: `${o.share}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-navy-500">Ödenmiş sermaye: 250.000.000 ₺ · Değerler temsilidir.</p>
    </ContentPage>
  );
}
