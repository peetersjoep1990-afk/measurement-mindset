import Link from 'next/link'
import { getTopic, formatDate, type Language } from '@/lib/articles'
import { localizeArticle, type SanityArticle } from '@/lib/sanity/queries'

type LatestInsightsProps = {
  articles: SanityArticle[]
  language: Language
}

export function LatestInsights({ articles, language }: LatestInsightsProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {articles.map((article) => {
        const loc = localizeArticle(article, language)
        const topic = getTopic(article.topic)

        return (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="focus-ring group grid gap-2 rounded-sm px-1 py-5 transition-colors hover:bg-card/55 md:grid-cols-[1fr_12rem_9rem] md:items-center md:gap-6"
          >
            <div>
              <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                {loc.title}
              </h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{loc.dek}</p>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">{topic?.name[language]}</p>
            <p className="text-sm text-muted-foreground">{formatDate(article.date, language)}</p>
          </Link>
        )
      })}
    </div>
  )
}
