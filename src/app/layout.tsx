import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { MarketProvider } from "@/lib/market/useLivePrices";
import { TickerBar } from "@/components/layout/TickerBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Portföy Yönetimi ve Serbest Fonlar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "portföy yönetimi",
    "serbest fon",
    "yatırım fonları",
    "Vega Portföy",
    "bireysel portföy yönetimi",
    "kurumsal portföy yönetimi",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `${site.name} — Portföy Yönetimi ve Serbest Fonlar`,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    foundingDate: String(site.founded),
    sameAs: Object.values(site.social),
  };

  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <MarketProvider>
          <TickerBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MarketProvider>
      </body>
    </html>
  );
}
