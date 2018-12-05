import { fork, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { setTextCustom, updateRandom } from 'src/store/example'

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
  // yield takeEvery(SETTEXTCUSTOM, setTextCustomSaga)
}
