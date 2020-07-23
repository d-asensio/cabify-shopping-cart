import { getProductQuantity } from './index'

describe('getProductQuantity', () => {
  it('gets the quantity of a specific product', () => {
    const state = {
      productCountersById: {
        TSHIRT: 2
      }
    }

    expect(
      getProductQuantity(state, 'TSHIRT')
    ).toBe(2)
  })

  it('returns 0 if the requested product counter is not still defined (have never been updated)', () => {
    const state = {
      productCountersById: {}
    }

    expect(
      getProductQuantity(state, 'TSHIRT')
    ).toBe(0)
  })
})
