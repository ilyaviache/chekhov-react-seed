import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Input = styled.input`
  background: transparent;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default class Example extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    random: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,

    t: PropTypes.func.isRequired
  }

  handleInput = (event) => {
    this.props.onChange(event.currentTarget.value)
  }

  render () {
    const { count, text, random, onClick } = this.props
    return (
      <Wrapper>
        <h2>{ this.props.t('clickCount') }: <b id="click-counter">{ count }</b></h2>
        <Button id="counter" onClick={ onClick }>Dont click!</Button>
        <hr />
        <h2>Text: <b>{ text }</b></h2>
        <Input onChange={ this.handleInput } value={ text } />
        <hr />
        <h2>Saga random value: <b>{ random.toFixed(4) }</b></h2>
        <hr />
        <Link to="/">Main</Link>
      </Wrapper>
    )
  }
}
