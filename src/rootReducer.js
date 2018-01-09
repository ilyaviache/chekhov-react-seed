import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'

import exampleReducer from 'src/example/exampleReducer'

export default enableBatching(combineReducers({
  exampleReducer
}))
