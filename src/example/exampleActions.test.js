import * as actions from './exampleActions'
import * as at from './exampleConstants'

describe('actions', () => {
  it('should create an action to increment a counter', () => {
    const expectedAction = { type: at.INCREMENT }
    expect(actions.increment()).toEqual(expectedAction)
  })

  it('should create an action to change text', () => {
    const text = 'Hey'
    const expectedAction = {
      type: at.CHANGE_TEXT,
      payload: {
        text
      }
    }
    expect(actions.changeText(text)).toEqual(expectedAction)
  })
})