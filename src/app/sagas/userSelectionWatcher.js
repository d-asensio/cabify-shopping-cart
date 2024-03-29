import {
  put,
  select,
  takeEvery,
  getContext
} from 'redux-saga/effects'

import { getSelectedProducts } from '../selectors'
import { actions } from '../reducers'

function * updateSummaryPrices () {
  const checkoutService = yield getContext('checkoutService')

  const productsSelection = yield select(
    getSelectedProducts
  )

  const {
    discounts,
    total
  } = yield checkoutService.getSummaryForSelection(productsSelection)

  yield put(
    actions.updateDiscounts({
      discounts
    })
  )

  yield put(
    actions.updateGrandTotal({
      total
    })
  )
}

export default function * userSelectionWatcher () {
  yield takeEvery(
    actions.updateProductCounter,
    updateSummaryPrices
  )

  yield takeEvery(
    actions.decreaseProductCounter,
    updateSummaryPrices
  )

  yield takeEvery(
    actions.increaseProductCounter,
    updateSummaryPrices
  )
}
