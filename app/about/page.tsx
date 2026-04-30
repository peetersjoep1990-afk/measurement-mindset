import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary, getLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Over Joep",
  description: "Over Joep Peeters en het Measurement Mindset platform.",
};

export default async function AboutPage() {
  const language = await getLanguage();
  const copy = getDictionary(language);
  const coreThemes =
    language === "nl"
      ? [
          "Measurement dat beslissingen verbetert, niet alleen rapportages.",
          "Marketingpsychologie die aandacht en intentie respecteert.",
          "Groeisystemen die bewijs, creativiteit en momentum verbinden.",
        ]
      : [
          "Measurement that improves decisions, not just reporting.",
          "Marketing psychology that respects attention and intent.",
          "Growth systems that balance evidence, creativity and momentum.",
        ];

  return (
    <>
      <Header language={language} copy={copy} />
      <main className="container py-16">
        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-[0.9] w-full max-w-md">
            <Image
              src="/dna-dark.png"
              alt=""
              width={900}
              height={506}
              className="dna-bg absolute -right-12 top-16 h-64 w-[120%] object-cover opacity-70"
            />
            <Image
              src="/joep-portrait.png"
              alt="Portrait of Joep Peeters"
              fill
              unoptimized
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="relative object-contain object-bottom drop-shadow-[0_22px_40px_rgba(7,24,50,0.14)]"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.pages.aboutEyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">
              {copy.pages.aboutTitle}
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-9 text-muted-foreground">
              <p>{copy.pages.aboutBody1}</p>
              <p>{copy.pages.aboutBody2}</p>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <SectionHeader eyebrow={copy.sections.coreThemes} />
          <div className="grid gap-5 md:grid-cols-3">
            {coreThemes.map((item) => (
              <div className="editorial-card rounded-md border border-border p-7 shadow-soft" key={item}>
                <p className="font-serif text-2xl leading-snug text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}
