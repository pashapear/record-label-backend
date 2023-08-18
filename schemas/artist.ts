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
      name: 'Links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
    },
  ],
}
