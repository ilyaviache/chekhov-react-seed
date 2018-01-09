import { put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { updateRandom } from 'src/example/exampleActions'

export default function* () {
  while (true) {
    yield delay(2000)
    yield put(updateRandom(Math.random()))
  }
}
