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

export function increaseProductCounter (state, { payload }) {
  const { productCountersById } = state
  const { id } = payload

  productCountersById[id] += 1
}

export function decreaseProductCounter (state, { payload }) {
  const { productCountersById } = state
  const { id } = payload

  if (productCountersById[id] === 0) return

  productCountersById[id] -= 1
}

export function openProductInfo (state, { payload }) {
  const { id } = payload

  state.shownInfoProductId = id
}

export function closeProductInfo (state) {
  state.shownInfoProductId = null
}
