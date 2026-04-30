import Link from 'next/link'
import { getTopic, formatDate, type Language } from '@/lib/articles'
import { localizeArticle, type SanityArticle } from '@/lib/sanity/queries'

type ArticleCardProps = {
  article: SanityArticle
  language: Language
  readLabel: string
  publishedLabel: string
}

export function ArticleCard({ article, language, readLabel, publishedLabel }: ArticleCardProps) {
  const loc = localizeArticle(article, language)
  const topic = getTopic(article.topic)

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="editorial-card focus-ring group relative flex min-h-[18.5rem] flex-col overflow-hidden rounded-sm border border-border p-7 transition duration-300 hover:border-primary/40 hover:shadow-editorial"
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
        {topic?.name[language]}
      </p>
      <h3 className="mt-5 max-w-sm font-serif text-[1.7rem] leading-tight text-foreground">
        {loc.title}
      </h3>
      <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-muted-foreground">{loc.dek}</p>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground">
        <span>{formatDate(article.date, language)}</span>
        <span className="font-medium text-primary transition-colors group-hover:text-foreground">→</span>
      </div>
      <span className="sr-only">
        {readLabel} {loc.title}, {publishedLabel} {formatDate(article.date, language)}
      </span>
    </Link>
  )
}
