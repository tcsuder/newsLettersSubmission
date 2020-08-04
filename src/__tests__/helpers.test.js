import {
  getIndexKeysFromStringKeys,
  getStringKeysFromIndexKeys,
  newsLetters,
} from '../helpers.js'

describe('getStringKeysFromIndexKeys', () => {
  it('should return stringKeys used for form values from newsLetters state object', () => {
    expect(getStringKeysFromIndexKeys(newsLetters)).toEqual({
      'letter-0': undefined,
      'letter-1': undefined,
      'letter-2': undefined,
      'letter-3': undefined,
      'letter-4': undefined,
    })
  })
})

describe('getIndexKeysFromStringKeys', () => {
  it('should return empty for empty values', () => {
    expect(getIndexKeysFromStringKeys({ newsLetters, values: {} })).toEqual({})
  })

  it('should return some but not all if selected', () => {
    expect(
      getIndexKeysFromStringKeys({
        newsLetters,
        values: {
          'letter-0': true,
          'letter-1': true,
          'letter-2': undefined,
          'letter-3': undefined,
          'letter-4': undefined,
        },
      })
    ).toEqual({
      0: newsLetters[0],
      1: newsLetters[1],
    })
  })

  it('should return all as values if selected', () => {
    expect(
      getIndexKeysFromStringKeys({
        newsLetters,
        values: {
          'letter-0': true,
          'letter-1': true,
          'letter-2': true,
          'letter-3': true,
          'letter-4': true,
        },
      })
    ).toEqual(newsLetters)
  })
})
