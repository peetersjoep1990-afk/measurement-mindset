import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary, getLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Resources",
  description: "Geselecteerde resources voor betere marketing measurement en groeibeslissingen.",
};

export default async function ResourcesPage() {
  const language = await getLanguage();
  const copy = getDictionary(language);
  const resources =
    language === "nl"
      ? [
          ["Measurement audit", "Maak scherp wat je kunt vertrouwen, wat richting geeft en wat getest moet worden."],
          ["Attributie checklist", "Herken de aannames die verborgen zitten in je kanaalperformance-model."],
          ["Experiment brief", "Definieer beslissing, risico en leerdoel voordat de test live gaat."],
        ]
      : [
          ["Measurement audit", "Clarify what you can trust, what is directional and what needs testing."],
          ["Attribution checklist", "Spot the assumptions hiding inside your channel performance model."],
          ["Experiment brief", "Define the decision, risk and learning goal before the test goes live."],
        ];

  return (
    <>
      <Header language={language} copy={copy} />
      <main className="container py-16">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.pages.resourcesEyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">
            {copy.pages.resourcesTitle}
          </h1>
          <p className="mt-7 text-lg leading-9 text-muted-foreground">
            {copy.pages.resourcesIntro}
          </p>
        </header>
        <section className="mt-16">
          <SectionHeader eyebrow={copy.sections.startHere} />
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map(([title, body]) => (
              <Link
                href="/insights"
                className="editorial-card focus-ring rounded-md border border-border p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/50"
                key={title}
              >
                <h2 className="font-serif text-3xl text-foreground">{title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{body}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}
