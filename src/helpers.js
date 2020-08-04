export const newsLetters = {
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

// if the selection for news letters was done as semantically cleanly as possible it would probably be made of a select/option menu with mutlip selectable options. But because it include UI rich descriptions checkboxes leave these unorganized. We have to do the work ourlselves to get the derivable keys into an array they same way they would be in a simpler menu. Thus, this takes values, and returns values as if the articles were being returned as an array of keys.

export const getLettersFromFormValues = ({ newsLetters, values }) => {
  const letterKeys = Object.keys(values).filter(
    (key) => key.indexOf('letter-') !== -1 && values[key] === true
  )

  const numberKeys = letterKeys.map((key) =>
    Number.parseInt(key.charAt(key.length - 1))
  )

  const filteredLetters = numberKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: newsLetters[key],
    }),
    {}
  )

  return filteredLetters
}
