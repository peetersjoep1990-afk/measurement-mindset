import { defineField, defineType } from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (EN)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'titleNl',
      title: 'Titel (NL)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      options: {
        list: [
          { title: 'Measurement', value: 'measurement' },
          { title: 'Marketing Psychology', value: 'marketing-psychology' },
          { title: 'Digital Marketing', value: 'digital-marketing' },
          { title: 'Growth', value: 'growth' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publicatiedatum',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured op homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'dek',
      title: 'Ondertitel (EN) — kort, voor kaartjes',
      type: 'string',
    }),
    defineField({
      name: 'dekNl',
      title: 'Ondertitel (NL)',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Intro (EN) — bovenaan artikel',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptNl',
      title: 'Intro (NL)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Artikel inhoud (EN)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'bodyNl',
      title: 'Artikel inhoud (NL)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'topic' },
  },
})
