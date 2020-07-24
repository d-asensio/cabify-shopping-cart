import { reducer, actions } from './index'

describe('updateDiscounts', () => {
  it('updates the discounts array', () => {
    const state = {
      discounts: []
    }

    const discounts = [
      {
        name: '2x1 Mug offer',
        amount: -10.00
      }
    ]

    const newState = reducer(
      state,
      actions.updateDiscounts({
        discounts
      })
    )

    expect(
      newState.discounts
    ).toBe(discounts)
  })
})

describe('updateGrandTotal', () => {
  it('updates the grand total', () => {
    const state = {
      grandTotal: 0
    }

    const newState = reducer(
      state,
      actions.updateGrandTotal({
        total: 69
      })
    )

    expect(
      newState.grandTotal
    ).toBe(69)
  })
})
