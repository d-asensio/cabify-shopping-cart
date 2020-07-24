import {
  getDiscounts
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
