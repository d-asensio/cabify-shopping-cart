import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlobalStyle from './GlobalStyle'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducers'
import { saga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: [
    sagaMiddleware
  ],
  devTools: true
})

sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('app')
)
