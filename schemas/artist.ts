import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'active',
      type: 'boolean',
      title: 'Active',
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
      name: 'bio',
      type: 'string',
      title: 'Bio',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
  initialValue: {
    active: true,
  },
})
