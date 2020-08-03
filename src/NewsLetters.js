import React, { Fragment, useState } from 'react'
import SubscriptionForm from './SubscriptionForm'
import FormSuccess from './FormSuccess'
import Articles from './Articles'

import './NewsLetters.css'

function NewsLetters() {
  const [formCompleted, setFormCompleted] = useState(false)

  return (
    <div className="newsLetters">
      <div className="modal">
        {!formCompleted ? (
          <Fragment>
            <Articles />

            <SubscriptionForm
              subscribe={(subs) => {
                setTimeout(() => {
                  setFormCompleted(true)
                }, 2000)
              }}
            />
          </Fragment>
        ) : (
          <FormSuccess error={undefined} />
        )}
      </div>
    </div>
  )
}

export default NewsLetters
