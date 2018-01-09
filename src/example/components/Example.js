import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Example extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleInput = (event) => {
    this.props.onChange(event.currentTarget.value)
  }

  render() {
    const { count, text, onClick } = this.props
    return (
      <div>
        <h2>Click count: <b>{ count }</b></h2>
        <button onClick={ onClick }>Dont click!</button>
        <hr />
        <h2>Text: <b>{ text }</b></h2>
        <input onChange={ this.handleInput } value={ text } />
        <hr />
        <Link to="/">Main</Link>
      </div>
    );
  }
}

