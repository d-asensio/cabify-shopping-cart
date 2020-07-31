import keyBy from 'lodash.keyby'

export function fetchProducts (state) {
  state.isLoadingProducts = true
}

export function receiveProducts (state, { payload }) {
  const { products } = payload

  state.productsById = keyBy(
    products,
    ({ id }) => id
  )

  state.isLoadingProducts = false
}

export function updateProductCounter (state, { payload }) {
  const { productCountersById } = state
  const { id, quantity } = payload

  if (quantity < 0) return

  productCountersById[id] = quantity
}

export function openProductInfo (state, { payload }) {
  const { productId } = payload

  state.shownInfoProductId = productId
}

export function closeProductInfo (state) {
  state.shownInfoProductId = null
}
