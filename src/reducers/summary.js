export function updateTotalProductsPrice (state, { payload }) {
  const { price } = payload

  state.totalProductsPrice = price
}
