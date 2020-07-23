import { createSelector } from 'reselect'
import { createCachedSelector } from 're-reselect'

const getProductsById = ({ productsById }) => productsById
const getProductCountersById = ({ productCountersById }) => productCountersById

export const getProductList = createSelector(
  getProductsById,
  productsById => Object.keys(productsById)
)

export const getProduct = createCachedSelector(
  getProductsById,
  (_, productId) => productId,
  (productsById, productId) => {
    return productsById[productId]
  }
)(
  (_, productId) => productId
)

export const getProductQuantity = createCachedSelector(
  getProductCountersById,
  (_, productId) => productId,
  (productCountersById, productId) => {
    return productCountersById[productId] || 0
  }
)(
  (_, productId) => productId
)

export const getTotalProductsQuantity = createSelector(
  getProductCountersById,
  productCountersById =>
    Object.values(productCountersById)
      .reduce(
        (acc, productQuantity) => acc + productQuantity,
        0
      )
)

export const getTotalProductsPrice = ({ totalProductsPrice }) => totalProductsPrice
