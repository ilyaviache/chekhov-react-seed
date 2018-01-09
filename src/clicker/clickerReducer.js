import { createReducer } from 'redux-create-reducer'
import * as at from 'src/clicker/clickerConstants'

const initialState = {
  count: 0
}

export default createReducer(initialState, {
  [at.INCREMENT]: state => ({ ...state, count: state.count + 1 })
})
