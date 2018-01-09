import React, { Component, Fragment } from 'react'
import { translate } from 'react-i18next'
import { Switch, Route, Link } from 'react-router-dom'
import ExampleContainer from 'src/example/containers/ExampleContainer'
import i18n from 'src/utils/i18n'
import logo from './logo.svg'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ this.props.t('title') }</h1>
          <button onClick={() => { i18n.changeLanguage('en'); }}>
            en
          </button>
          <button onClick={() => { i18n.changeLanguage('ru'); }}>
            ru
          </button>
        </header>
        <Switch>
          <Route path="/example" component={ ExampleContainer } />
          <Route path="/" render={ props => (
            <Fragment>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <Link to="/example">Route example</Link>
            </Fragment>
          )} />
        </Switch>
      </div>
    );
  }
}

export default translate()(App);
