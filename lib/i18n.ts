import { cookies } from "next/headers";
import { defaultLanguage, type Language } from "@/lib/articles";
import { languageCookieName } from "@/lib/language";

export const dictionary = {
  nl: {
    nav: {
      insights: "Insights",
      topics: "Topics",
      about: "Over Joep",
      resources: "Resources",
    },
    language: {
      label: "Taal wijzigen",
      nl: "NL",
      en: "EN",
    },
    hero: {
      eyebrow: "Thought leadership over measurement, marketing & psychologie",
      headline1: "Betere data.",
      headline2: "Slimmere beslissingen.",
      headline3: "Sterkere groei.",
      subcopy1: "Helderder measurement. Slimmere marketing.",
      subcopy2: "Beter begrip van menselijk gedrag.",
      subcopy3: "Alles om merken met meer vertrouwen te laten groeien.",
      primaryCta: "Lees de inzichten",
      secondaryCta: "Over mij",
      jumpLink: "Begin met de featured essays",
    },
    sections: {
      featured: "Featured insights",
      exploreTopics: "Verken per topic",
      latest: "Laatste inzichten",
      viewAll: "Bekijk alle inzichten",
      featuredPage: "Featured",
      allInsights: "Alle inzichten",
      startHere: "Begin hier",
      coreThemes: "Kernprincipes",
    },
    articles: {
      readEssay: "Lees essay",
      allInsights: "Alle insights",
      browseAll: "Bekijk alle insights",
      exploreMeasurement: "Verken measurement topics",
      published: "Gepubliceerd op",
    },
    pages: {
      insightsEyebrow: "Insights",
      insightsTitle: "Helder denken voor complexe groeibeslissingen.",
      insightsIntro:
        "Essays en frameworks over measurement, media-effectiviteit, psychologie en de beslissingen achter duurzame groei.",
      topicEyebrow: "Topic",
      noTopicArticles: "Meer essays over dit topic volgen binnenkort.",
      aboutEyebrow: "Over Joep",
      aboutTitle:
        "Measurement-minded marketing voor merken die met meer vertrouwen willen groeien.",
      aboutBody1:
        "Joep Peeters schrijft over het snijvlak van data, marketingstrategie en menselijk gedrag. Het doel is simpel: teams helpen betere beslissingen te nemen wanneer dashboards ruis bevatten, klantreizen rommelig zijn en de inzet hoog is.",
      aboutBody2:
        "Measurement Mindset is gebouwd voor marketeers, founders en groeileiders die minder performance theater willen en meer bruikbare waarheid.",
      resourcesEyebrow: "Resources",
      resourcesTitle: "Praktische startpunten voor scherper groe werk.",
      resourcesIntro:
        "Een rustige plek voor frameworks, leeslijsten en diagnosevragen die measurement vertalen naar betere beslissingen.",
    },
    footer: {
      description:
        "Thought leadership voor merken die helderder willen meten, scherper willen marketen en met meer vertrouwen willen groeien.",
      explore: "Verkennen",
      focus: "Focus",
      focusText:
        "Measurement, attributie, marketingpsychologie, CRO, digital marketing en groei.",
    },
  },
  en: {
    nav: {
      insights: "Insights",
      topics: "Topics",
      about: "About",
      resources: "Resources",
    },
    language: {
      label: "Change language",
      nl: "NL",
      en: "EN",
    },
    hero: {
      eyebrow: "Thought leadership on measurement, marketing & psychology",
      headline1: "Better data.",
      headline2: "Smarter decisions.",
      headline3: "Stronger growth.",
      subcopy1: "Clearer measurement. Smarter marketing.",
      subcopy2: "Better understanding of human behavior.",
      subcopy3: "All to help brands grow with confidence.",
      primaryCta: "Read the insights",
      secondaryCta: "About me",
      jumpLink: "Start with the featured essays",
    },
    sections: {
      featured: "Featured insights",
      exploreTopics: "Explore by topic",
      latest: "Latest insights",
      viewAll: "View all insights",
      featuredPage: "Featured",
      allInsights: "All insights",
      startHere: "Start here",
      coreThemes: "Core themes",
    },
    articles: {
      readEssay: "Read essay",
      allInsights: "All insights",
      browseAll: "Browse all insights",
      exploreMeasurement: "Explore measurement topics",
      published: "Published",
    },
    pages: {
      insightsEyebrow: "Insights",
      insightsTitle: "Clear thinking for complex growth decisions.",
      insightsIntro:
        "Essays and frameworks on measurement, media effectiveness, psychology and the decisions behind sustainable growth.",
      topicEyebrow: "Topic",
      noTopicArticles: "More essays on this topic are coming soon.",
      aboutEyebrow: "About Joep",
      aboutTitle:
        "Measurement-minded marketing for brands that want to grow with confidence.",
      aboutBody1:
        "Joep Peeters writes about the space where data, marketing strategy and human behavior meet. The goal is simple: help teams make better decisions when the dashboard is noisy, the customer journey is messy and the stakes are real.",
      aboutBody2:
        "Measurement Mindset is built for marketers, founders and growth leaders who want less performance theater and more useful truth.",
      resourcesEyebrow: "Resources",
      resourcesTitle: "Practical starting points for sharper growth work.",
      resourcesIntro:
        "A calm place for frameworks, reading lists and diagnostic questions that turn measurement into better decisions.",
    },
    footer: {
      description:
        "Thought leadership for brands that want clearer measurement, sharper marketing and more confident growth decisions.",
      explore: "Explore",
      focus: "Focus",
      focusText:
        "Measurement, attribution, marketing psychology, CRO, digital marketing and growth.",
    },
  },
} as const;

export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const value = cookieStore.get(languageCookieName)?.value;

  return value === "en" || value === "nl" ? value : defaultLanguage;
}

export function getDictionary(language: Language) {
  return dictionary[language];
}
