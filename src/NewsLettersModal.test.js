import React from 'react'
import { render } from '@testing-library/react'
import NewsLettersModal from './NewsLettersModal'

test('renders learn react link', () => {
  const { getByText } = render(<NewsLettersModal />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
