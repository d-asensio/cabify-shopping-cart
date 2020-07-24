import { reducer, actions } from './index'

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
