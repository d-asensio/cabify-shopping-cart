import { reducer, actions } from './index'

describe('fetchProducts', () => {
  it('sets the loading state to `true`', () => {
    const state = {
      isLoadingProducts: false
    }

    const newState = reducer(
      state,
      actions.fetchProducts()
    )

    expect(
      newState.isLoadingProducts
    ).toBe(true)
  })
})

describe('updateProductCounter', () => {
  it('updates the product counter if the provided amount is positive', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: 2
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(2)
  })

  it('updates the product counter if the provided amount is zero', () => {
    const state = {
      productCountersById: {
        TSHIRT: 3
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: 0
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })

  it('do not update the product counter if the provided amount is positive', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: -2
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })
})
