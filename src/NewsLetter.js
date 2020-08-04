import React from 'react'
import checkMark from './checkMark.png'

import './NewsLetter.css'

function NewsLetter({ newsLetter, handleChange, idx, isSelected }) {
  return (
    <div className="newsLetter">
      <div className="image">
        <img src={newsLetter.imageUrl} alt="banner from newsletter" />
      </div>
      <div className="info">
        <h3>{newsLetter.title}</h3>
        <p>{newsLetter.text}</p>
      </div>
      <label htmlFor={`letter-${idx}`} className={isSelected && 'isSelected'}>
        {isSelected && <img alt="checkMark" src={checkMark}></img>}
        <input
          id={`letter-${idx}`}
          className="hiddenCheckBox"
          type="checkbox"
          name={`letter-${idx}`}
          onChange={handleChange}
        />
        <p>select to recieve this news letter</p>
      </label>
    </div>
  )
}

export default NewsLetter
