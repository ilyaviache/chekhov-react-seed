import { createReducer } from 'redux-create-reducer'
import * as at from 'src/example/exampleConstants'

const initialState = {
  count: 0,
  text: 'Hi!',
  random: Math.random()
}

export default createReducer(initialState, {
  [at.INCREMENT]: state => ({ ...state, count: state.count + 1 }),

  [at.CHANGE_TEXT]: (state, action) => ({
    ...state,
    text: action.payload.text
  }),

  [at.SET_RANDOM]: (state, action) => ({
    ...state,
    random: action.payload.random
  })
})
