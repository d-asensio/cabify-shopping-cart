import { expectSaga } from 'redux-saga-test-plan'
import { getContext, select } from 'redux-saga-test-plan/matchers'

import { getSelectedProducts } from '../../selectors'
import { actions } from '../../reducers'

import userSelectionWatcher from '../userSelectionWatcher'

describe('updateSummaryPrices', () => {
  it('responds to updateProductCounter actions triggering the right side effect sequence', async () => {
    const context = {
      getSummaryForSelection: async () => ({
        discounts: [
          {
            name: 'x3 Shirt offer',
            amount: -3.00
          }
        ],
        total: 57
      })
    }

    const selectedProducts = [
      {
        id: 'MUG',
        quantity: 3
      }
    ]

    await expectSaga(userSelectionWatcher)
      .provide([
        [
          getContext('checkoutService'),
          context
        ],
        [
          select(getSelectedProducts),
          selectedProducts
        ]
      ])
      .getContext('checkoutService')
      .put(
        actions.updateDiscounts({
          discounts: [
            {
              name: 'x3 Shirt offer',
              amount: -3.00
            }
          ]
        })
      )
      .put(
        actions.updateGrandTotal({
          total: 57
        })
      )
      .dispatch(
        actions.updateProductCounter({
          id: 'MUG',
          quantity: 3
        })
      )
      .silentRun()
  })
})
