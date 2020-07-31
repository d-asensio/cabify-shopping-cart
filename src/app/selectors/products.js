import { createSelector } from 'reselect'
import { createCachedSelector } from 're-reselect'

const getProductsById = ({ productsById }) => productsById
const getProductCountersById = ({ productCountersById }) => productCountersById

export const getShownInfoProductId = ({ shownInfoProductId }) => shownInfoProductId
export const getIsLoadingProducts = ({ isLoadingProducts }) => isLoadingProducts

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

export const getTotalProductsPrice = createSelector(
  getProductsById,
  getProductCountersById,
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

export const getSelectedProducts = createSelector(
  getProductCountersById,
  productCountersById =>
    Object.entries(productCountersById)
      .map(
        ([id, quantity]) => ({ id, quantity })
      )
)
