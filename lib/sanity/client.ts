import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  console.warn('[Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is niet ingesteld of ongeldig. Vul je project ID in .env.local in.')
}

export const client = createClient({
  projectId: projectId ?? 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
