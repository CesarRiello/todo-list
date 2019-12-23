import uuidGenerator from 'components/helpers/uuidGenerator'

test('shold generate slugs of words', () => {
  expect(/[\w]{8}-[\w]{4}-4[\w]{3}-[\w]{4}-[\w]{12}/.test(uuidGenerator())).toBe(true)
})
