import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleCard } from '@/components/ArticleCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SectionHeader } from '@/components/SectionHeader'
import { getTopic, topics } from '@/lib/articles'
import { getArticlesByTopic } from '@/lib/sanity/queries'
import { getDictionary, getLanguage } from '@/lib/i18n'

export const revalidate = 60

type TopicPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params
  const language = await getLanguage()
  const topic = getTopic(slug)
  if (!topic) return {}
  return { title: topic.name[language], description: topic.thesis[language] }
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params
  const language = await getLanguage()
  const copy = getDictionary(language)
  const topic = getTopic(slug)

  if (!topic) notFound()

  const articles = await getArticlesByTopic(slug)

  return (
    <>
      <Header language={language} copy={copy} />
      <main className="container py-16">
        <header className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.pages.topicEyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">
              {topic.name[language]}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-muted-foreground">{topic.thesis[language]}</p>
        </header>
        <section className="mt-16">
          <SectionHeader eyebrow={`${topic.name[language]} insights`} />
          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} language={language} readLabel={copy.articles.readEssay} publishedLabel={copy.articles.published} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">{copy.pages.noTopicArticles}</p>
          )}
        </section>
      </main>
      <Footer copy={copy} />
    </>
  )
}
