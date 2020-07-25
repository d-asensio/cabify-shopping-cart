import {
  put,
  takeEvery,
  getContext
} from 'redux-saga/effects'

import { actions } from '../reducers'

function * fetchProducts () {
  const checkoutService = yield getContext('checkoutService')

  const products = yield checkoutService.getAvailableProducts()

  yield put(
    actions.receiveProducts({
      products
    })
  )
}

export default function * fetchData () {
  yield takeEvery(
    actions.fetchProducts,
    fetchProducts
  )
}
