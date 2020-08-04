import React from 'react'
import { render } from '@testing-library/react'
import SubscriptionForm from '../SubscriptionForm'
import { newsLetters } from '../helpers'

test('renders news letter with internal static text', () => {
  const { getAllByText } = render(
    <SubscriptionForm
      newsLetters={newsLetters}
      subscribe={() => {}}
      setMessage={() => {}}
    />
  )
  const labelText = getAllByText(/Select to recieve this news letter/i)
  expect(labelText.length).toEqual(5)
})
