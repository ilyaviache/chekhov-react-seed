import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router-dom'

import theme from './utils/theme'

import Router from 'src/router'

export class App extends Component {

  componentWillMount() {
    // this.props.loadSession()
  }

  render() {
    const { isAppInitializing } = this.props

    // TODO: Add loader
    if (isAppInitializing) {
      return <div></div>
    }

    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = () => ({
  isAppInitializing: false
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
