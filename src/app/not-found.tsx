import Link from "next/link";
import { CTA } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-7xl font-bold text-navy-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">Sayfa bulunamadı</h1>
      <p className="mt-3 text-navy-600">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTA href="/" variant="primary">Ana Sayfa</CTA>
        <CTA href="/fonlar" variant="outline">Fonlar</CTA>
        <Link href="/arama" className="rounded-full px-6 py-3 text-sm font-semibold text-navy-600 hover:text-gold-600">Arama →</Link>
      </div>
    </div>
  );
}
