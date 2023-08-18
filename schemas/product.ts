export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'release',
      type: 'reference',
      title: 'Release',
      to: [{type: 'release'}],
    },
  ],
}
