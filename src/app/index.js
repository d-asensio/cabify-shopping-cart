import React from 'react'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducers'
import { saga } from './sagas'

import { initCheckoutService } from './services'

import App from './App'

const checkoutService = initCheckoutService()

const sagaMiddleware = createSagaMiddleware({
  context: {
    checkoutService
  }
})

const store = configureStore({
  reducer,
  middleware: [
    sagaMiddleware
  ],
  devTools: true
})

sagaMiddleware.run(saga)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
