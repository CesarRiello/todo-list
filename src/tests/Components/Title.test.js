import React from 'react'
import Title from 'components/Title'
import { render } from '@testing-library/react'

test('renders Task Editor link', () => {
  const { getByText } = render(<Title>Test expected</Title>)
  const linkElement = getByText(/Test expected/i)
  expect(linkElement).toBeInTheDocument()
})
