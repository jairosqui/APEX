import Link from "next/link";
import { ApexMark } from "@/components/Icons";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-mist px-5 py-20 sm:px-6">
      <div className="flex max-w-[460px] flex-col items-center gap-5 text-center">
        <ApexMark className="h-12 w-12" />
        <h1 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-0.02em] text-navy">
          404 — Page not found
        </h1>
        <p className="text-pretty text-[16px] leading-relaxed text-slate-muted">
          The page you are looking for does not exist or has been moved.
          <br />
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-electric px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy"
        >
          Back to home / Volver al inicio
        </Link>
      </div>
    </section>
  );
}
