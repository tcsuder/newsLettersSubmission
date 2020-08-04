import React from 'react'
import Loader from './Loader'
import NewsLetter from './NewsLetter'
import useForm from './useForm'

import './SubscriptionForm.css'

function SubscriptionForm({ newsLetters, subscribe }) {
  const initialValues = {
    email: '',
    noSolicit: false,
  }
  Object.keys(newsLetters).forEach(
    (key) => (initialValues[`letter-${key}`] = false)
  )

  const { handleChange, handleSubmit, isSubmitting, values } = useForm({
    initialValues,
    onSubmit: (values) => {
      console.log({ values })
      subscribe(values)
    },
  })

  return (
    <div className="subscriptionForm">
      <header>
        <h2>News Letters</h2>
        <p>Select all news letters you'd like to recieve</p>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <div className="newsLettersScroller">
          {Object.keys(newsLetters).map((key) => (
            <NewsLetter
              key={key}
              idx={key}
              newsLetter={newsLetters[key]}
              handleChange={handleChange}
              isSelected={values[`letter-${key}`]}
            />
          ))}
        </div>
        <div className="contactData">
          <input
            className="buttonShape"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <button className="buttonShape" type="submit">
            {isSubmitting ? <Loader /> : 'SUBSCRIBE'}
          </button>
          <label className="buttonShape">
            <input type="checkbox" name="noSolicit" onChange={handleChange} />
            <p>
              I do not want to recieve information about future news letters
            </p>
          </label>
        </div>
      </form>
    </div>
  )
}

export default SubscriptionForm
