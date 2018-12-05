import exampleReducer, { INCREMENT, SETTEXTCUSTOM } from './exampleReducer'

const initialState = {
  count: 0,
  text: 'Hi!',
  isTextDefault: true,
  random: 0
}

describe('exampleReducer', () => {
  it('should return the initial state', () => {
    expect(exampleReducer(undefined, {})).toEqual({
      count: 0,
      text: 'Hi!',
      isTextDefault: true,
      random: 0
    })
  })

  it('should handle INCREMENT', () => {
    expect(
      exampleReducer(undefined, { type: INCREMENT })
    ).toEqual({ ...initialState, count: 1 })
  })
  it('should handle CHANGE_TEXT', () => {
    const text = 'Hey!'
    expect(
      exampleReducer(undefined, {
        type: SETTEXTCUSTOM,
        payload: text
      })
    ).toEqual({ ...initialState, text })
  })
})
