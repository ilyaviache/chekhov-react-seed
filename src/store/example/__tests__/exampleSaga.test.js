import { put } from 'redux-saga/effects'
import { setTextCustomSaga } from './exampleSaga'
import { setTextCustom } from './exampleReducer'
it('should dispatch setCustomText action', () => {
  const gen = setTextCustomSaga()
  expect(gen.next().value).toEqual(put(setTextCustom()))
})
