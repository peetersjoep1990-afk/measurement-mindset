export type Language = "nl" | "en";
export type TopicSlug = "measurement" | "marketing-psychology" | "digital-marketing" | "growth";

type LocalizedText = Record<Language, string>;

export type Topic = {
  slug: TopicSlug;
  name: LocalizedText;
  description: LocalizedText;
  thesis: LocalizedText;
};

export type Article = {
  slug: string;
  title: LocalizedText;
  dek: LocalizedText;
  excerpt: LocalizedText;
  topic: TopicSlug;
  date: string;
  readTime: LocalizedText;
  featured?: boolean;
};

export const defaultLanguage: Language = "nl";

export const topics: Topic[] = [
  {
    slug: "measurement",
    name: {
      nl: "Measurement",
      en: "Measurement",
    },
    description: {
      nl: "Maak je data begrijpelijk en meet wat er echt toe doet.",
      en: "Make sense of your data and measure what matters.",
    },
    thesis: {
      nl: "Measurement is geen rapportagelaag. Het is het besturingssysteem voor betere groeibeslissingen.",
      en: "Measurement is not a reporting layer. It is the operating system for confident growth decisions.",
    },
  },
  {
    slug: "marketing-psychology",
    name: {
      nl: "Marketingpsychologie",
      en: "Marketing Psychology",
    },
    description: {
      nl: "Begrijp menselijk gedrag om meer impact te maken.",
      en: "Understand human behavior to create impact.",
    },
    thesis: {
      nl: "Betere marketing begint bij respect voor hoe mensen aandacht geven, betekenis vormen en keuzes maken.",
      en: "Better marketing starts by respecting how people notice, interpret and choose.",
    },
  },
  {
    slug: "digital-marketing",
    name: {
      nl: "Digital marketing",
      en: "Digital Marketing",
    },
    description: {
      nl: "Strategieën, frameworks en experimenten die groei versnellen.",
      en: "Strategies, frameworks and experiments that drive growth.",
    },
    thesis: {
      nl: "Digital marketing werkt beter wanneer kanaalexpertise, creativiteit en measurement samen leren.",
      en: "Digital marketing performs best when channel craft, creative judgment and measurement learn together.",
    },
  },
  {
    slug: "growth",
    name: {
      nl: "Groei",
      en: "Growth",
    },
    description: {
      nl: "Systemen en inzichten voor duurzame groei.",
      en: "Systems and insights for sustainable growth.",
    },
    thesis: {
      nl: "Groei is een systeem van scherpe keuzes, snelle leercycli en gedisciplineerde experimenten.",
      en: "Growth is a system of disciplined bets, fast learning and sharper strategic trade-offs.",
    },
  },
];

export const articles: Article[] = [
  {
    slug: "your-attribution-model-is-lying-to-you",
    title: {
      nl: "Je attributiemodel liegt tegen je",
      en: "Your attribution model is lying to you",
    },
    dek: {
      nl: "Waarom multi-touch attributie faalt en wat je beter kunt doen.",
      en: "Why multi-touch attribution fails and what to do instead.",
    },
    excerpt: {
      nl: "Attributiemodellen geven nette antwoorden op rommelig klantgedrag. Juist daarom worden ze gevaarlijk wanneer teams precisie verwarren met waarheid.",
      en: "Attribution models give clean answers to messy customer behavior. That is exactly why they become dangerous when teams confuse precision with truth.",
    },
    topic: "measurement",
    date: "2024-05-27",
    readTime: {
      nl: "7 min leestijd",
      en: "7 min read",
    },
    featured: true,
  },
  {
    slug: "why-roas-is-killing-your-growth",
    title: {
      nl: "Waarom ROAS je groei kapotmaakt",
      en: "Why ROAS is killing your growth",
    },
    dek: {
      nl: "De verborgen kosten van optimaliseren op korte-termijnefficiëntie.",
      en: "The hidden cost of optimizing for short-term efficiency.",
    },
    excerpt: {
      nl: "ROAS kan marketing efficiënt laten lijken terwijl het toekomstige vraag, creatief leren en categoriegroei uitholt.",
      en: "ROAS can make marketing look efficient while quietly starving future demand, creative learning and category growth.",
    },
    topic: "digital-marketing",
    date: "2024-05-24",
    readTime: {
      nl: "6 min leestijd",
      en: "6 min read",
    },
    featured: true,
  },
  {
    slug: "psychology-behind-high-performing-ads",
    title: {
      nl: "De psychologie achter high-performing ads",
      en: "The psychology behind high-performing ads",
    },
    dek: {
      nl: "Hoe emotie, bias en aandacht clicks sturen, niet alleen logica.",
      en: "How emotions, bias and attention drive clicks, not logic.",
    },
    excerpt: {
      nl: "Sterke advertenties winnen zelden omdat ze meer uitleggen. Ze winnen omdat ze de juiste mentale shortcut makkelijk maken.",
      en: "High-performing ads rarely win because they explain more. They win because they make the right mental shortcut easy.",
    },
    topic: "marketing-psychology",
    date: "2024-05-22",
    readTime: {
      nl: "6 min leestijd",
      en: "6 min read",
    },
    featured: true,
  },
  {
    slug: "incrementality-growth-lever-brands-ignore",
    title: {
      nl: "Incrementality: de groeilever die merken vaak negeren",
      en: "Incrementality: the growth lever most brands ignore",
    },
    dek: {
      nl: "Waarom incrementality testing de enige manier is om te weten wat echt groei veroorzaakt.",
      en: "Why incrementality testing is the only way to know what is actually driving growth.",
    },
    excerpt: {
      nl: "Incrementality geeft groeiteams de moed om te stoppen met activity die alleen effectief lijkt omdat het bestaande vraag volgt.",
      en: "Incrementality gives growth teams the courage to stop funding activity that only looks effective because it follows existing demand.",
    },
    topic: "measurement",
    date: "2024-05-20",
    readTime: {
      nl: "7 min leestijd",
      en: "7 min read",
    },
  },
  {
    slug: "cognitive-biases-marketing-ethically",
    title: {
      nl: "Cognitieve biases in marketing, maar dan ethisch",
      en: "Cognitive biases in marketing and how to use them ethically",
    },
    dek: {
      nl: "De biases die klantkeuzes beïnvloeden en hoe je er verantwoord omheen ontwerpt.",
      en: "The biases influencing your customers' decisions and how to design around them.",
    },
    excerpt: {
      nl: "Behavioral science wordt pas echt krachtig wanneer het keuzes verduidelijkt in plaats van verwarring uitbuit.",
      en: "Behavioral science becomes powerful when it clarifies decisions instead of exploiting confusion.",
    },
    topic: "marketing-psychology",
    date: "2024-05-13",
    readTime: {
      nl: "6 min leestijd",
      en: "6 min read",
    },
  },
  {
    slug: "mmm-vs-mta-stop-comparing-start-combining",
    title: {
      nl: "MMM vs MTA: stop met vergelijken, begin met combineren",
      en: "MMM vs MTA: stop comparing, start combining",
    },
    dek: {
      nl: "De beste inzichten ontstaan wanneer je beide modellen samen gebruikt.",
      en: "The best insights come from using both models together.",
    },
    excerpt: {
      nl: "Marketing mix modeling en attributie beantwoorden verschillende vragen. Het voordeel ontstaat wanneer teams stoppen met één methode alles te laten doen.",
      en: "Marketing mix modeling and attribution answer different questions. The advantage appears when teams stop asking one method to do both jobs.",
    },
    topic: "measurement",
    date: "2024-05-06",
    readTime: {
      nl: "8 min leestijd",
      en: "8 min read",
    },
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getTopicArticles(slug: string) {
  return articles.filter((article) => article.topic === slug);
}

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured);
}

export function getLatestArticles(limit?: number) {
  const sorted = [...articles].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function formatDate(date: string, language: Language = defaultLanguage) {
  return new Intl.DateTimeFormat(language === "nl" ? "nl-NL" : "en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
