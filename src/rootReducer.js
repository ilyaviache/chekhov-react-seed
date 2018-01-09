import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'

import clickerReducer from './clicker/clickerReducer'

export default enableBatching(combineReducers({
  clickerReducer
}))
