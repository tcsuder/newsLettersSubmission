import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders header with initial message', () => {
  const { getByText } = render(<App />)
  const initialMessage = getByText(
    /Select all news letters you'd like to recieve/i
  )
  expect(initialMessage).toBeInTheDocument()
})
