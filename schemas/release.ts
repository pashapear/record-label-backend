export default {
  name: 'release',
  type: 'document',
  title: 'Release',
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
      name: 'Image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'catalogNumber',
      type: 'number',
      title: 'Catalog Number',
    },
    {
      name: 'artist',
      type: 'reference',
      title: 'Artist',
      to: [{type: 'artist'}],
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
    },
    {
      name: 'Links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
    },
  ],
}
