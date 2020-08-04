import React from 'react'
import NewsLetter from './NewsLetter'

function FormSuccess({ newsLetters }) {
  return (
    // this code is somewhat duplicated... ideally NewsLetters would be it's own list component
    <div style={{ flex: '1' }} className="formSuccess">
      <div className="newsLettersScroller">
        {Object.keys(newsLetters).map((key) => (
          <NewsLetter
            key={key}
            idx={key}
            newsLetter={newsLetters[key]}
            handleChange={() => {}}
            isSelected={true}
          />
        ))}
      </div>
    </div>
  )
}

export default FormSuccess
