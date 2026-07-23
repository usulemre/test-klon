import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Veri Takvimi",
  description: "Yurt içi ve yurt dışı ekonomik veri açıklama takvimi.",
  alternates: { canonical: "/bultenler/veri-takvimi" },
};

const takvim = [
  { date: "23.07.2026", time: "10:00", country: "TR", event: "TCMB Faiz Kararı", importance: "Yüksek" },
  { date: "23.07.2026", time: "15:30", country: "ABD", event: "Haftalık İşsizlik Başvuruları", importance: "Orta" },
  { date: "24.07.2026", time: "10:00", country: "TR", event: "Tüketici Güven Endeksi", importance: "Orta" },
  { date: "25.07.2026", time: "17:00", country: "ABD", event: "Michigan Tüketici Güveni", importance: "Orta" },
  { date: "28.07.2026", time: "10:00", country: "TR", event: "Dış Ticaret Dengesi", importance: "Düşük" },
  { date: "31.07.2026", time: "10:00", country: "TR", event: "Enflasyon (TÜFE)", importance: "Yüksek" },
];

const impColor: Record<string, string> = { Yüksek: "#ef4444", Orta: "#f59e0b", Düşük: "#22c55e" };

export default function Page() {
  return (
    <>
      <PageHero
        title="Veri Takvimi"
        desc="Piyasaları etkileyebilecek önemli ekonomik veri açıklamaları."
        breadcrumb={[{ label: "Bültenler & Analiz", href: "/bultenler" }, { label: "Veri Takvimi" }]}
      />
      <Section className="py-12">
        <div className="overflow-x-auto rounded-2xl border border-navy-100">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">Tarih</th>
                <th className="px-4 py-3 font-semibold">Saat</th>
                <th className="px-4 py-3 font-semibold">Ülke</th>
                <th className="px-4 py-3 font-semibold">Olay</th>
                <th className="px-4 py-3 font-semibold">Önem</th>
              </tr>
            </thead>
            <tbody>
              {takvim.map((t, i) => (
                <tr key={i} className={i % 2 ? "bg-navy-50/40" : "bg-white"}>
                  <td className="px-4 py-3 text-navy-700">{t.date}</td>
                  <td className="px-4 py-3 text-navy-700 tabular-nums">{t.time}</td>
                  <td className="px-4 py-3 font-medium text-navy-900">{t.country}</td>
                  <td className="px-4 py-3 text-navy-800">{t.event}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: impColor[t.importance], backgroundColor: `${impColor[t.importance]}1a` }}>
                      {t.importance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
