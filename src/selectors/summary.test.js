import {
  getDiscounts,
  getGrandTotal
} from './index'

describe('getDiscounts', () => {
  it('returns the right discount object from the store', () => {
    const state = {
      discounts: [
        {
          name: '2x1 Mug offer',
          amount: -10.00
        }
      ]
    }

    expect(
      getDiscounts(state)
    ).toBe(
      state.discounts
    )
  })
})

describe('getGrandTotal', () => {
  it('returns the grand total from the store', () => {
    const state = {
      grandTotal: 42
    }

    expect(
      getGrandTotal(state)
    ).toBe(42)
  })
})
