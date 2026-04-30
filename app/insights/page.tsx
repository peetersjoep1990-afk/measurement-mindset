import type { Metadata } from 'next'
import { ArticleCard } from '@/components/ArticleCard'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LatestInsights } from '@/components/LatestInsights'
import { SectionHeader } from '@/components/SectionHeader'
import { getFeaturedArticles, getAllArticles } from '@/lib/sanity/queries'
import { getDictionary, getLanguage } from '@/lib/i18n'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Essays en frameworks over measurement, attributie, marketingpsychologie en groei.',
}

export default async function InsightsPage() {
  const language = await getLanguage()
  const copy = getDictionary(language)
  const featured = await getFeaturedArticles()
  const all = await getAllArticles()

  return (
    <>
      <Header language={language} copy={copy} />
      <main className="container py-16">
        <header className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{copy.pages.insightsEyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-7xl">
            {copy.pages.insightsTitle}
          </h1>
          <p className="mt-7 text-lg leading-9 text-muted-foreground">{copy.pages.insightsIntro}</p>
        </header>
        {featured.length > 0 && (
          <section className="mt-16">
            <SectionHeader eyebrow={copy.sections.featuredPage} />
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map((article) => (
                <ArticleCard article={article} key={article.slug} language={language} readLabel={copy.articles.readEssay} publishedLabel={copy.articles.published} />
              ))}
            </div>
          </section>
        )}
        <section className="mt-16">
          <SectionHeader eyebrow={copy.sections.allInsights} />
          <LatestInsights articles={all} language={language} />
        </section>
      </main>
      <Footer copy={copy} />
    </>
  )
}
