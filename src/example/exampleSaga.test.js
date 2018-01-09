import { put } from 'redux-saga/effects'
import { setTextCustomSaga } from './exampleSaga'
import * as actions from './exampleActions'

it('should dispatch setCustomText action', () => {
  const gen = setTextCustomSaga();
  expect(gen.next().value).toEqual(put(actions.setTextCustom()))
})
