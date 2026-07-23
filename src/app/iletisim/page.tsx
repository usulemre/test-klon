import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Vega Portföy ile iletişime geçin — telefon, e-posta, adres ve iletişim formu.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  return (
    <>
      <PageHero title="İletişim" desc="Sorularınız için buradayız. Size en kısa sürede dönüş yapalım." pathname="/iletisim" />
      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* İletişim bilgileri */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy-900">İletişim Bilgileri</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-navy-400">Adres</dt>
                  <dd className="font-medium text-navy-900">{site.address}</dd>
                </div>
                <div>
                  <dt className="text-navy-400">Telefon</dt>
                  <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-navy-900 hover:text-gold-600">{site.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-navy-400">E-posta</dt>
                  <dd><a href={`mailto:${site.email}`} className="font-medium text-navy-900 hover:text-gold-600">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="text-navy-400">Çalışma Saatleri</dt>
                  <dd className="font-medium text-navy-900">{site.hours}</dd>
                </div>
              </dl>
            </div>
            <div className="flex h-56 items-center justify-center rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-100 to-navy-50 text-navy-400">
              <span className="text-sm">🗺️ Harita — {site.address}</span>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy-900">Bize Yazın</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
