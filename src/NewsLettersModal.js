import React, { useState } from 'react'
import SubscriptionForm from './SubscriptionForm'
import FormSuccess from './FormSuccess'

import './NewsLettersModal.css'

const newsLetters = {
  0: {
    title: 'Reverse The Online Gambling Ban',
    text:
      'The MPA comes with three different sizes of foam and silicone tips and a carrying pouch.',
    imageUrl: 'https://picsum.photos/152/110',
  },
  1: {
    title: 'Successful Myspace Profile',
    text:
      'All users on MySpace will know that there are millions of people out there.',
    imageUrl: 'https://picsum.photos/152/110',
  },
  2: {
    title: 'Home Audio Recording For Everyone',
    text:
      'The number of friends and acquaintances will grow in a large number. This is what you should be looking for.',
    imageUrl: 'https://picsum.photos/152/110',
  },
  3: {
    title: 'Buy Used Electronic Test Equipment',
    text:
      "People will after all make friends after reading about you. If you have an ugly profile there's no way you'll succeed",
    imageUrl: 'https://picsum.photos/152/110',
  },
  4: {
    title: 'Psst, there just taking your data',
    text:
      "In the end this isn't a game to win or loose. It's one you have to decide if you will play.",
    imageUrl: 'https://picsum.photos/152/110',
  },
}

function NewsLettersModal() {
  const [formCompleted, setFormCompleted] = useState(false)

  return (
    <div className="modalUnderlay">
      <div className="modal">
        {!formCompleted ? (
          <SubscriptionForm
            newsLetters={newsLetters}
            subscribe={(subs) => {
              setTimeout(() => {
                setFormCompleted(true)
              }, 2500)
            }}
          />
        ) : (
          <FormSuccess error={undefined} />
        )}
      </div>
    </div>
  )
}

export default NewsLettersModal
