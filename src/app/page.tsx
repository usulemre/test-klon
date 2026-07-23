import Link from "next/link";
import type { Metadata } from "next";
import { CTA, Section, SectionHeading, StatBadge } from "@/components/ui/primitives";
import { MarketGrid, FundCardGrid } from "@/components/market/MarketGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Test Klon Portföy Yönetimi — serbest fonlar, bireysel ve kurumsal portföy yönetimi, alternatif yatırımlar. Canlı fon fiyatları ve piyasa verileri.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Bireysel Portföy Yönetimi",
    href: "/hizmetler/bireysel-portfoy-yonetimi",
    desc: "Kişisel hedeflerinize göre tasarlanmış, aktif yönetilen portföy stratejileri.",
    icon: "◈",
  },
  {
    title: "Kurumsal Portföy Yönetimi",
    href: "/hizmetler/kurumsal-portfoy-yonetimi",
    desc: "Şirket, vakıf ve emeklilik fonları için kurumsal çözümler.",
    icon: "▣",
  },
  {
    title: "Alternatif Yatırımlar",
    href: "/hizmetler/alternatif-yatirimlar",
    desc: "Serbest fonlar ve alternatif enstrümanlarla çeşitlendirilmiş getiri.",
    icon: "◆",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_-10%,rgba(201,162,75,0.18),transparent)]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-market-up" /> SPK lisanslı portföy yönetim şirketi
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Birikimlerinizi <span className="text-gold-400">uzman ellerde</span> büyütün
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-100">
              {site.name}, serbest fonlar ile bireysel ve kurumsal portföy yönetiminde şeffaflık, disiplin ve
              performansı bir araya getirir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href="/fonlar" variant="gold">Fonlarımızı İnceleyin</CTA>
              <CTA href="/iletisim" variant="dark">Bize Ulaşın</CTA>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-200">
              <span>✓ 25+ yıl sektör deneyimi</span>
              <span>✓ 4 aktif serbest fon</span>
              <span>✓ Bağımsız denetimli</span>
            </div>
          </div>

          {/* Canlı piyasa kartları (referans görsel) */}
          <div className="animate-fade-up rounded-3xl border border-white/10 bg-market-bg/60 p-4 backdrop-blur">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-sm font-semibold text-white">Canlı Piyasa</span>
              <span className="flex items-center gap-1.5 text-[11px] text-market-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-market-up" /> Gerçek zamanlı
              </span>
            </div>
            <MarketGrid symbols={["XU100", "XU030", "XU050", "XUKAT"]} />
          </div>
        </div>
      </section>

      {/* İSTATİSTİK */}
      <Section className="-mt-8 relative z-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatBadge value="14,2 Mlr ₺" label="Yönetilen Varlık" />
          <StatBadge value="4.800+" label="Yatırımcı" />
          <StatBadge value={`${new Date().getFullYear() - site.founded}+ Yıl`} label="Tecrübe" />
          <StatBadge value="4" label="Aktif Fon" />
        </div>
      </Section>

      {/* FONLAR */}
      <Section className="py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Fonlarımız" title="Canlı fon fiyatları" desc="Serbest ve hisse senedi fonlarımızın anlık pay fiyatları ve performansı." />
          <CTA href="/fonlar/karsilastir" variant="outline">Fonları Karşılaştır</CTA>
        </div>
        <FundCardGrid />
      </Section>

      {/* HİZMETLER */}
      <div className="bg-navy-50/50 py-16">
        <Section>
          <SectionHeading eyebrow="Hizmetler" title="Size uygun yönetim modeli" center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-xl text-gold-400">{s.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-navy-900 group-hover:text-gold-600">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{s.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-navy-500 group-hover:text-gold-600">Detaylı Bilgi →</span>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* PİYASA GENEL BAKIŞ */}
      <Section className="py-16">
        <SectionHeading eyebrow="Piyasa" title="BIST endeksleri — canlı" desc="Borsa İstanbul endekslerini tek ekrandan takip edin." />
        <div className="mt-8 rounded-3xl border border-market-border bg-market-bg p-5">
          <MarketGrid />
        </div>
      </Section>

      {/* YATIRIMCI YÖNLENDİRME (rapor: SSS/Rehber eksikleri) */}
      <Section className="py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "İlk kez mi yatırım yapıyorsunuz?", desc: "Adım adım yatırımcı rehberimizle başlayın.", href: "/yatirimci-rehberi", cta: "Rehberi Aç" },
            { title: "Aklınıza takılan sorular mı var?", desc: "Fon alım/satım, vergi ve minimum tutarlar.", href: "/sss", cta: "SSS'ye Git" },
            { title: "Hemen başlamak mı istiyorsunuz?", desc: "Çok adımlı sihirbazla profilinizi oluşturun.", href: "/yatirimci-ol", cta: "Yatırımcı Ol" },
          ].map((c) => (
            <div key={c.href} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{c.desc}</p>
              <Link href={c.href} className="mt-4 inline-block text-sm font-semibold text-gold-600 hover:text-gold-700">{c.cta} →</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA ŞERİDİ */}
      <Section className="py-16">
        <div className="overflow-hidden rounded-3xl bg-navy-900 px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Portföyünüzü uzman ekibimizle konuşun</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-200">
            Size en uygun yatırım stratejisini birlikte belirleyelim. Ücretsiz ön görüşme talep edin.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/yatirimci-ol" variant="gold">Hemen Başvur</CTA>
            <CTA href="/iletisim" variant="dark">İletişime Geç</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
