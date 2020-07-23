import { getGrandTotal } from './index'

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
