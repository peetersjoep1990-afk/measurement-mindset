import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllSlugs, getArticleBySlug, localizeArticle } from '@/lib/sanity/queries'
import { getTopic, formatDate } from '@/lib/articles'
import { getDictionary, getLanguage } from '@/lib/i18n'
import Link from 'next/link'

export const revalidate = 60

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const language = await getLanguage()
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  const loc = localizeArticle(article, language)
  return { title: loc.title, description: loc.excerpt }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const language = await getLanguage()
  const copy = getDictionary(language)
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  const loc = localizeArticle(article, language)
  const topic = getTopic(article.topic)

  return (
    <>
      <Header language={language} copy={copy} />
      <main>
        <article className="container py-12">
          <Link
            href="/insights"
            className="focus-ring inline-flex rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ← {copy.articles.allInsights}
          </Link>
          <header className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {topic?.name[language]}
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">
              {loc.title}
            </h1>
            {loc.excerpt && (
              <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">
                {loc.excerpt}
              </p>
            )}
            <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
              <span>{formatDate(article.date, language)}</span>
            </div>
          </header>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute -left-24 top-4 hidden h-44 w-44 rounded-full bg-primary/10 blur-3xl md:block" />
            {loc.body ? (
              <div className="article-prose relative">
                <PortableText value={loc.body as Parameters<typeof PortableText>[0]['value']} />
              </div>
            ) : (
              <p className="text-muted-foreground">Artikel inhoud volgt binnenkort.</p>
            )}
          </div>
          <nav
            aria-label="Article navigation"
            className="mx-auto mt-16 flex max-w-3xl flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <Link
              className="focus-ring rounded-sm text-sm text-muted-foreground hover:text-primary"
              href="/insights"
            >
              {copy.articles.browseAll} →
            </Link>
          </nav>
        </article>
      </main>
      <Footer copy={copy} />
    </>
  )
}
