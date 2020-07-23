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

export const getTotalProductsQuantity = createSelector(
  productCountersById,
  productCountersById =>
    Object.values(productCountersById)
      .reduce(
        (acc, productQuantity) => acc + productQuantity,
        0
      )
)

export const getTotalProductsPrice = createSelector(
  productsById,
  productCountersById,
  (productsById, productCountersById) =>
    Object.entries(productCountersById)
      .reduce(
        (acc, [productId, productQuantity]) => {
          const product = productsById[productId]
          return acc + (productQuantity * product.price)
        },
        0
      )
)
