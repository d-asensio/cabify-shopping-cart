export function fetchProducts (state) {
  state.isLoadingProducts = true
}

export function updateProductCounter (state, { payload }) {
  const { productCountersById } = state
  const { id, quantity } = payload

  if (quantity < 0) return

  productCountersById[id] = quantity
}
