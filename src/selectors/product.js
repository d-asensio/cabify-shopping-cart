import { createSelector } from 'reselect'
import { createCachedSelector } from 're-reselect'

const productsById = ({ productsById }) => productsById
const productCountersById = ({ productCountersById }) => productCountersById

export const getProductList = createSelector(
  productsById,
  productsById => Object.keys(productsById)
)

export const getProduct = createCachedSelector(
  productsById,
  (_, productId) => productId,
  (productsById, productId) => {
    return productsById[productId]
  }
)(
  (_, productId) => productId
)

export const getProductQuantity = createCachedSelector(
  productCountersById,
  (_, productId) => productId,
  (productCountersById, productId) => {
    return productCountersById[productId] || 0
  }
)(
  (_, productId) => productId
)
