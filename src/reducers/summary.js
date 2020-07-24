export function updateDiscounts (state, { payload }) {
  const { discounts } = payload

  state.discounts = discounts
}

export function updateGrandTotal (state, { payload }) {
  const { total } = payload

  state.grandTotal = total
}
