import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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

  render() {
    const { count, text, random, onClick } = this.props
    return (
      <div>
        <h2>{ this.props.t('clickCount') }: <b>{ count }</b></h2>
        <button onClick={ onClick }>Dont click!</button>
        <hr />
        <h2>Text: <b>{ text }</b></h2>
        <input onChange={ this.handleInput } value={ text } />
        <hr />
        <h2>Saga random value: <b>{ random.toFixed(4) }</b></h2>
        <hr />
        <Link to="/">Main</Link>
      </div>
    );
  }
}

