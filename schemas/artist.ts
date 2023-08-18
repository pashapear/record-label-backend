// import {defineType, defineField, defineArrayMember} from 'sanity'

export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
    },
  ],
}
