import {
  getDiscounts,
  getTotalDiscountsAmount
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

describe('getTotalDiscountsAmount', () => {
  it('returns the sum of all the discounts', () => {
    const state = {
      discounts: [
        {
          name: '2x1 Mug offer',
          amount: -10.00
        },
        {
          name: 'x3 Shirt offer',
          amount: -3.00
        }
      ]
    }

    expect(
      getTotalDiscountsAmount(state)
    ).toBe(-13.00)
  })

  it('returns 0 if there are no discounts', () => {
    const state = {
      discounts: []
    }

    expect(
      getTotalDiscountsAmount(state)
    ).toBe(0)
  })
})
