import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'quiz',
  title: 'Quiz',
  type: 'array',
  of: [defineArrayMember({ type: 'mcq' })],
})

export const mcq = defineType({
  name: 'mcq',
  title: 'MCQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'choices',
      title: 'Choices',
      type: 'array',
      of: [defineArrayMember({ type: 'choice' })],
    }),
  ],
})

export const choice = defineType({
  name: 'choice',
  title: 'Choice',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'isCorrect',
      title: 'Is Correct',
      type: 'boolean',
    }),
  ],
})
