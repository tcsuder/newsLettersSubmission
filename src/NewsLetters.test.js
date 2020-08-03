import React from 'react'
import { render } from '@testing-library/react'
import NewsLetters from './NewsLetters'

test('renders learn react link', () => {
  const { getByText } = render(<NewsLetters />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
