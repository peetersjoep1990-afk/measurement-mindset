import Link from "next/link";
import { BarChart2, Brain, Target, TrendingUp, BookOpen, type LucideIcon } from "lucide-react";
import { Topic, type Language } from "@/lib/articles";

const topicIcons: Record<string, LucideIcon> = {
  measurement: BarChart2,
  "marketing-psychology": Brain,
  "digital-marketing": Target,
  growth: TrendingUp,
};

type TopicCardProps = {
  topic: Topic;
  language: Language;
  readLabel: string;
};

export function TopicCard({ topic, language }: TopicCardProps) {
  const Icon = topicIcons[topic.slug] ?? BookOpen;

  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="focus-ring group flex min-h-[12.5rem] flex-col rounded-sm border border-border bg-transparent p-6 transition duration-300 hover:border-primary/40 hover:bg-card/55 hover:shadow-soft"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:border-primary group-hover:bg-primary/5">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-medium text-foreground">{topic.name[language]}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description[language]}</p>
      <span className="mt-auto pt-5 text-sm font-medium text-primary transition-colors group-hover:text-foreground">
        →
      </span>
    </Link>
  );
}
