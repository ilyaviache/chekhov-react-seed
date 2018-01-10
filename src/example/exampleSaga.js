import { fork, takeEvery, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as at from 'src/example/exampleConstants'
import { updateRandom, setTextCustom } from 'src/example/exampleActions'

function * updateRandomSaga () {
  while (true) {
    yield delay(2000)
    yield put(updateRandom(Math.random()))
  }
}

export function * setTextCustomSaga () {
  yield put(setTextCustom())
}

export default function * () {
  yield fork(updateRandomSaga)
  yield takeEvery(at.CHANGE_TEXT, setTextCustomSaga)
}
