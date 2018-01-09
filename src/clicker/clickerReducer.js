import { createReducer } from 'redux-create-reducer'
import * as at from './clickerConstants'

const initialState = {
  count: 0
}

export default createReducer(initialState, {
  [at.INCREMENT]: state => ({ ...state, count: state.count + 1 })
})
