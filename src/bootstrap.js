import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from 'src/App'

import configureStore from 'src/store'

import './index.css'

const store = configureStore()

export default function bootstrap () {

  // Additional initialization
  // Somemodule.init()  
  registerServiceWorker()
  
  class Root extends PureComponent {
    render () {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
    }
  }

  return <Root />
}
