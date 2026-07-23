import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description: "Test Klon Portföy yönetim kurulu ve üst yönetim ekibi.",
  alternates: { canonical: "/hakkimizda/yonetim-kurulu" },
};

const board = [
  { name: "Ayşe Demir", role: "Yönetim Kurulu Başkanı", bio: "25 yıllık sermaye piyasaları deneyimi." },
  { name: "Mehmet Kaya", role: "Genel Müdür / CEO", bio: "Portföy yönetimi ve fon operasyonları." },
  { name: "Elif Yıldız", role: "Yatırım Direktörü (CIO)", bio: "Çok varlıklı strateji ve risk yönetimi." },
  { name: "Can Aksoy", role: "Uyum ve Risk Direktörü", bio: "İç kontrol, uyum ve mevzuat." },
  { name: "Zeynep Şahin", role: "Operasyon Direktörü (COO)", bio: "Fon operasyonları ve teknoloji." },
  { name: "Burak Öztürk", role: "Bağımsız Üye", bio: "Kurumsal yönetim ve denetim." },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Yönetim Kurulu"
        desc="Deneyimli ekibimizle yatırımlarınızı güvenle yönetiyoruz."
        breadcrumb={[{ label: "Hakkımızda", href: "/hakkimizda" }, { label: "Yönetim Kurulu" }]}
      />
      <Section className="py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((m) => (
            <div key={m.name} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-xl font-bold text-gold-400">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{m.name}</h3>
              <p className="text-sm font-medium text-gold-600">{m.role}</p>
              <p className="mt-2 text-sm text-navy-600">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
