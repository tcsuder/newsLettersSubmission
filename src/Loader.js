import React, { useState } from 'react'
import useInterval from './useInterval'

function Loader() {
  const dots = useState(new Array(3).fill(''))[0]
  const [currentDot, setCurrentDot] = useState(0)

  useInterval(() => {
    setCurrentDot(currentDot === 2 ? 0 : currentDot + 1)
  }, 750)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="loader">
      {dots.map((_, idx) => (
        <div
          style={{
            background: idx === currentDot ? '#d8d8d8' : 'white',
            border: '1px solid #f3f3f3',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            width: '10px',
            height: '10px',
            borderRadius: '10px',
            margin: '5px',
          }}
          key={idx}
        />
      ))}
    </div>
  )
}

export default Loader
