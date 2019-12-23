import slugify from 'components/helpers/slugify'

test('shold generate slugs of words', () => {
  expect(slugify('cabeça de cão')).toEqual('cabeca-de-cao')
  expect(slugify('são paulo')).toEqual('sao-paulo')
})
