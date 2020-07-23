import { createCachedSelector } from 're-reselect'

const productCountersById = ({ productCountersById }) => productCountersById

export const getProductQuantity = createCachedSelector(
  productCountersById,
  (_, productId) => productId,
  (productCountersById, productId) => {
    return productCountersById[productId] || 0
  }
)(
  (_, productId) => productId
)
