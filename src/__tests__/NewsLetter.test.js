import React from 'react'
import { render } from '@testing-library/react'
import NewsLetter from '../NewsLetter'
import { newsLetters } from '../helpers'

test('renders news letter with internal static text', () => {
  const { getByText } = render(
    <NewsLetter
      handleChange={() => {}}
      idx={0}
      isSelected={false}
      newsLetter={newsLetters[0]}
      onClick={() => {}}
    />
  )
  const labelText = getByText(/Select to recieve this news letter/i)
  expect(labelText).toBeInTheDocument()
})
