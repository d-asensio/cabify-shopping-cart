export function updateTotalProductsPrice (state, { payload }) {
  const { price } = payload

  state.totalProductsPrice = price
}

export function updateGrandTotal (state, { payload }) {
  const { total } = payload

  state.grandTotal = total
}
