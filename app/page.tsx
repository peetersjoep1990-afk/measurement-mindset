import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LatestInsights } from '@/components/LatestInsights'
import { SectionHeader } from '@/components/SectionHeader'
import { ArticleCard } from '@/components/ArticleCard'
import { getFeaturedArticles, getLatestArticles } from '@/lib/sanity/queries'
import { getDictionary, getLanguage } from '@/lib/i18n'

export const revalidate = 60

export default async function Home() {
  const language = await getLanguage()
  const copy = getDictionary(language)
  const featured = await getFeaturedArticles()
  const latest = await getLatestArticles(3)

  return (
    <>
      <Header language={language} copy={copy} />
      <main>
        <Hero copy={copy.hero} />
        <section id="featured-insights" className="container py-10 md:py-12">
          <SectionHeader eyebrow={copy.sections.featured} href="/insights" linkLabel={copy.sections.viewAll} />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((article) => (
              <ArticleCard article={article} key={article.slug} language={language} readLabel={copy.articles.readEssay} publishedLabel={copy.articles.published} />
            ))}
          </div>
        </section>
        <section className="container py-10 md:py-12">
          <SectionHeader eyebrow={copy.sections.latest} href="/insights" linkLabel={copy.sections.viewAll} />
          <LatestInsights articles={latest} language={language} />
        </section>
      </main>
      <Footer copy={copy} />
    </>
  )
}
