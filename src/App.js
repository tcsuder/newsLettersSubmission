import React, { useState } from 'react'
import SubscriptionForm from './SubscriptionForm'
import FormSuccess from './FormSuccess'

import { newsLetters } from './helpers'

import './App.css'

function App() {
  // form completed and subsequent conditional render could be handled by redirect or app state values instead of local state setting
  const [formCompleted, setFormCompleted] = useState(false)
  const [chosenNewsLetters, setChosenNewsLetters] = useState({})
  const [message, setMessage] = useState(
    "Select all news letters you'd like to recieve"
  )

  return (
    <div className="modalUnderlay">
      <div className="modal">
        <header>
          <h2>News Letters</h2>
          <p>{message}</p>
        </header>
        {!formCompleted ? (
          <SubscriptionForm
            newsLetters={newsLetters}
            subscribe={({ values, errors }) => {
              console.log(values)
              setTimeout(() => {
                // finer handling of front end errors would be great here
                if (errors) {
                  setMessage(
                    `we were unable to complete your request because of the following error: ${errors[0]}`
                  )
                }
                // this is where we would use a fetch method passed in from a connected parent or a state system...
                setMessage(`Your subscriptions are on their way!`)
                setChosenNewsLetters(values.newsLetters)
                setFormCompleted(true)
              }, 2500)
            }}
            setMessage={setMessage}
          />
        ) : (
          <FormSuccess newsLetters={chosenNewsLetters} error={undefined} />
        )}
      </div>
    </div>
  )
}

export default App
