import { expectSaga } from 'redux-saga-test-plan'
import { getContext } from 'redux-saga-test-plan/matchers'

import { actions } from '../reducers'

import fetchData from './fetchData'

describe('fetchProducts', () => {
  it('responds to fetchProducts actions triggering the right side effect sequence', async () => {
    const context = {
      getAvailableProducts: async () => [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00,
          imageSrc: 'images/thumbnails/shirt.png'
        }
      ]
    }

    await expectSaga(fetchData)
      .provide([
        [
          getContext('checkoutService'),
          context
        ]
      ])
      .getContext('checkoutService')
      .put(
        actions.receiveProducts({
          products: [
            {
              id: 'TSHIRT',
              name: 'Shirt',
              code: 'X7R2OPX',
              price: 20.00,
              imageSrc: 'images/thumbnails/shirt.png'
            }
          ]
        })
      )
      .dispatch(
        actions.fetchProducts()
      )
      .silentRun()
  })
})
