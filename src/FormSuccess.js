import React from 'react'

function FormSuccess({ error }) {
  return (
    <div className="formSuccess">
      <h2>
        {!error
          ? `Your subscriptions are on their way!`
          : `we were unable to complete your request because of the following error: ${error.message}`}
      </h2>
    </div>
  )
}

export default FormSuccess
