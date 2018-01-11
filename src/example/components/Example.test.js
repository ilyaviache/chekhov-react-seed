import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Example from './Example'

const defaultProps = {
  count: 0,
  text: '',
  random: 0,
  onClick: () => {},
  onChange: () => {},
  t: () => ''
}

const Component = () => (
  <MemoryRouter>
    <Example { ...defaultProps } />
  </MemoryRouter>
)

it('renders Example without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Component />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
