import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Clicker extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    return(
      <div>
        <h2>Click count: <b>{ this.props.count }</b></h2>
        <button onClick={ this.props.onClick }>Dont click!</button>
      </div>
    )
  }
}
