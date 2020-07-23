import { reducer, actions } from './index'

describe('updateTotalProductsPrice', () => {
  it('updates the total products price', () => {
    const state = {
      totalProductsPrice: 0
    }

    const newState = reducer(
      state,
      actions.updateTotalProductsPrice({
        price: 30
      })
    )

    expect(
      newState.totalProductsPrice
    ).toBe(30)
  })
})
