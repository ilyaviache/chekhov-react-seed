import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import ExampleContainer from 'src/example/containers/ExampleContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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

export default App;
