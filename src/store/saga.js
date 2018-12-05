import { fork } from 'redux-saga/effects'

import { exampleSaga } from 'src/store/example'

export default function* rootSaga () {
  yield fork(exampleSaga)
}
