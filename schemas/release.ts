import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'release',
  type: 'document',
  title: 'Release',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'catalogNumber',
      type: 'number',
      title: 'Catalog Number',
    }),
    defineField({
      name: 'artist',
      type: 'reference',
      title: 'Artist',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
})
