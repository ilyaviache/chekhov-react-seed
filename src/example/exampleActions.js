import * as at from 'src/example/exampleConstants'

export const increment = () => ({ type: at.INCREMENT })
export const changeText = text => ({
  type: at.CHANGE_TEXT,
  payload: {
    text
  }
})
export const updateRandom = random => ({
  type: at.SET_RANDOM,
  payload: {
    random
  }
})
