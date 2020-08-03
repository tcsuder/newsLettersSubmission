import React from 'react'
import Loader from './Loader'
import useForm from './useForm'

import './SubscriptionForm.css'

function SubscriptionForm({ subscribe }) {
  const { handleChange, handleSubmit, isSubmitting } = useForm({
    initialValues: {
      email: '',
      noInfo: false,
    },
    onSubmit: (values) => {
      console.log({ values })
      subscribe(values)
    },
  })

  return (
    <div className="subscriptionForm">
      {isSubmitting && <Loader />}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <input
          className="element"
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <button className="element" type="submit">
          SUBSCRIBE
        </button>
        <label className="element">
          <input
            type="checkbox"
            name="noInfo"
            onChange={handleChange}
            // selected={false}
          />
          <p>I do not want to recieve information about future news letters</p>
        </label>
      </form>
    </div>
  )
}

export default SubscriptionForm
