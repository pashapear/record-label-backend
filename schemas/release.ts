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
  ],
}
