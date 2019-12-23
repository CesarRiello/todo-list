import { dateIso } from 'components/helpers/mask'

test('shold set mask date iso format', () => {
  expect(dateIso('201908232259')).toEqual('2019-08-23 22:59')
  expect(dateIso(201908232259)).toEqual('2019-08-23 22:59')
})
