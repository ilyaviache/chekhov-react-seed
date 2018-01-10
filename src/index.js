import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { enableBatching } from 'redux-batched-actions'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import i18n from 'src/utils/i18n'
import rootReducer from 'src/rootReducer'
import rootSaga from 'src/rootSaga'
import App from 'src/App'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  enableBatching(rootReducer),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
)
registerServiceWorker()
