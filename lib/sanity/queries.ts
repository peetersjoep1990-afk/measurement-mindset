import { client } from './client'
import type { Language } from '@/lib/articles'

export type SanityArticle = {
  _id: string
  slug: string
  title: string
  titleNl?: string
  dek?: string
  dekNl?: string
  excerpt?: string
  excerptNl?: string
  topic: string
  date: string
  featured?: boolean
  body?: unknown[]
  bodyNl?: unknown[]
}

const articleFields = `
  _id,
  "slug": slug.current,
  title,
  titleNl,
  dek,
  dekNl,
  excerpt,
  excerptNl,
  topic,
  date,
  featured,
  body,
  bodyNl
`

export async function getAllArticles(): Promise<SanityArticle[]> {
  return client.fetch(
    `*[_type == "article"] | order(date desc) { ${articleFields} }`
  )
}

export async function getFeaturedArticles(): Promise<SanityArticle[]> {
  return client.fetch(
    `*[_type == "article" && featured == true] | order(date desc) { ${articleFields} }`
  )
}

export async function getLatestArticles(limit?: number): Promise<SanityArticle[]> {
  const limitClause = limit ? `[0...${limit}]` : ''
  return client.fetch(
    `*[_type == "article"] | order(date desc) ${limitClause} { ${articleFields} }`
  )
}

export async function getArticleBySlug(slug: string): Promise<SanityArticle | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] { ${articleFields} }`,
    { slug }
  )
}

export async function getArticlesByTopic(topic: string): Promise<SanityArticle[]> {
  return client.fetch(
    `*[_type == "article" && topic == $topic] | order(date desc) { ${articleFields} }`,
    { topic }
  )
}

export async function getAllSlugs(): Promise<string[]> {
  const results = await client.fetch<{ slug: string }[]>(
    `*[_type == "article"] { "slug": slug.current }`
  )
  return results.map((r) => r.slug)
}

export function localizeArticle(article: SanityArticle, language: Language) {
  return {
    ...article,
    title: (language === 'nl' && article.titleNl) ? article.titleNl : article.title,
    dek: (language === 'nl' && article.dekNl) ? article.dekNl : (article.dek ?? ''),
    excerpt: (language === 'nl' && article.excerptNl) ? article.excerptNl : (article.excerpt ?? ''),
    body: (language === 'nl' && article.bodyNl) ? article.bodyNl : article.body,
  }
}
