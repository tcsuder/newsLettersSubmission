import React from 'react'
import Loader from './Loader'
import NewsLetter from './NewsLetter'
import useForm from './useForm'

import {
  getIndexKeysFromStringKeys,
  getStringKeysFromIndexKeys,
} from './helpers'

import './SubscriptionForm.css'

function SubscriptionForm({ newsLetters, subscribe, setMessage }) {
  const initialValues = {
    ...getStringKeysFromIndexKeys(newsLetters),
    email: '',
    noSolicit: false,
  }

  const { handleChange, handleSubmit, isSubmitting, values } = useForm({
    initialValues,
    onSubmit: ({ values, errors }) => {
      // handle normalizing values as close to initial manipulation as possible to contain any wierdness from `letter-${key}` wierdness
      const letters = getIndexKeysFromStringKeys({ newsLetters, values })
      subscribe({
        values: {
          ...values,
          newsLetters: letters,
        },
        errors,
      })
    },
  })

  return (
    <div className="formWrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (
            Object.keys(getIndexKeysFromStringKeys({ newsLetters, values }))
              .length === 0
          ) {
            // ideally this message could change style based on failed validation as well...
            return setMessage('Please choose at least one subscription.')
          }
          if (values.email === '') {
            // ideally this message could change style based on failed validation as well...
            return setMessage('Please include an email address.')
          }
          return handleSubmit()
        }}>
        <div className="newsLettersScroller">
          {Object.keys(newsLetters).map((key) => (
            <NewsLetter
              key={key}
              idx={key}
              newsLetter={newsLetters[key]}
              handleChange={handleChange}
              onClick={() => {
                // this is kinda wonky... it synthesizes an event in order to hook into the handleChange method. Since the form is the complex part of this equation I prefer to keep the complexity in one place instead of coding for that in an otherwise simple system
                handleChange({
                  target: {
                    value: !values[`letter-${key}`],
                    name: `letter-${key}`,
                  },
                })
              }}
              isSelected={values[`letter-${key}`]}
            />
          ))}
        </div>
        <div className="contactData">
          <input
            className="buttonShape"
            type="email"
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
