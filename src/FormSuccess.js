import React from 'react'
import NewsLetter from './NewsLetter'

function FormSuccess({ newsLetters }) {
  // this code is somewhat duplicated... ideally NewsLetters would be it's own list component
  return (
    <div className="formWrapper">
      <div className="newsLettersScroller">
        {Object.keys(newsLetters).map((key) => (
          <NewsLetter
            key={key}
            idx={key}
            newsLetter={newsLetters[key]}
            handleChange={() => {}}
            onClick={() => {}}
            isSelected={true}
          />
        ))}
      </div>
    </div>
  )
}

export default FormSuccess
