import { fork } from 'redux-saga/effects'

import exampleSaga from 'src/example/exampleSaga'

export default function* rootSaga() {
  yield fork(exampleSaga)
}
