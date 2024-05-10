import { PlayIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Video Source',
      type: 'string',
      initialValue: 'youtube',
      options: {
        list: [
          { title: 'Youtube', value: 'youtube' },
          { title: 'Vdocipher', value: 'vdocipher' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent.source === 'vdocipher',
    }),
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      hidden: ({ parent }) => parent.source === 'youtube',
    }),
  ],
})
