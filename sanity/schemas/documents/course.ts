import { BulbOutlineIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  icon: BulbOutlineIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Title slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'isPaidCourse',
      title: 'Is paid course?',
      type: 'boolean',
    }),
    defineField({
      name: 'pricing',
      title: 'Course Pricing',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        { name: 'actualPrice', type: 'number', title: 'Actual Price' },
        { name: 'discountedPrice', type: 'number', title: 'Discounted Price' },
      ],
    }),
    defineField({
      name: 'chapters',
      type: 'array',
      of: [defineArrayMember({ type: 'chapter' })],
    }),
  ],
})
