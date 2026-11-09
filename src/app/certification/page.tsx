import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certification | Therapy by Brooke",
  description: "Professional massage therapy certification.",
};

export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-spa-cream pt-32 pb-20">
      <section className="mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl md:text-5xl">Certification</h1>
        <Image
          src="/images/certification.jpg"
          alt="Massage therapy certificate"
          width={1200}
          height={1600}
          className="h-auto w-full rounded-xl shadow-md"
          priority
        />
      </section>
    </main>
  );
}
