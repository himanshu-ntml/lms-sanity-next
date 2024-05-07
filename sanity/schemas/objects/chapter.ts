import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'chapter',
  title: 'Chapter',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'items',
      type: 'object',
      fields: [
        defineField({
          name: 'videos',
          title: 'Videos',
          type: 'array',
          of: [{ type: 'video' }],
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'file',
                  type: 'file',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'url', title: 'URL', type: 'url' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'quiz',
          title: 'Quiz',
          type: 'quiz',
        }),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [defineArrayMember({ type: 'faq' })],
        }),
      ],
    }),
  ],
})
