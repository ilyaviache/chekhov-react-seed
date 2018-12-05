import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---

export const INCREMENT = 'icos/INCREMENT'
export const UPDATERANDOM = 'icos/UPDATERANDOM'
export const SETTEXTCUSTOM = 'icos/SETTEXTCUSTOM'
export const CHANGETEXT = 'icos/CHANGETEXT'
export const SET_RANDOM = 'icos/SET_RANDOM'

// ---
// ACTION CREATORS
// ---

export const increment = createAction(INCREMENT)
export const setTextCustom = createAction(SETTEXTCUSTOM)
export const updateRandom = createAction(UPDATERANDOM)
export const changeText = createAction(CHANGETEXT)

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  count: 0,
  text: 'Hi!',
  isTextDefault: true,
  random: 0
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [INCREMENT]: (state, action) =>
      Immutable.merge(state, { count: state.count + 1 }),
    [CHANGETEXT]: (state, action) =>
      Immutable.merge(state, { text: action.payload }),
    [UPDATERANDOM]: (state, action) =>
      Immutable.merge(state, { random: action.payload }),
    [SETTEXTCUSTOM]: (state, action) =>
      Immutable.merge(state, { text: action.payload })
  },
  initialState
)
// import { createReducer } from 'redux-create-reducer'
// import * as at from 'src/icos/exampleConstants'

// const initialState = {
//   count: 0,
//   text: 'Hi!',
//   isTextDefault: true,
//   random: 0
// }

// export default createReducer(initialState, {
//   [at.INCREMENT]: state => ({ ...state, count: state.count + 1 }),

//   [at.CHANGE_TEXT]: (state, action) => ({
//     ...state,
//     text: action.payload.text
//   }),

//   [at.SET_RANDOM]: (state, action) => ({
//     ...state,
//     random: action.payload.random
//   }),

//   [at.SET_TEXT_CUSTOM]: state => ({ ...state, isTextDefault: false })
// })
