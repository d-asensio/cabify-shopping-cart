import { createSelector } from 'reselect'

export const getDiscounts = ({ discounts }) => discounts

export const getTotalDiscountsAmount = createSelector(
  getDiscounts,
  discounts => discounts.reduce(
    (acc, discount) => acc + discount.amount,
    0
  )
)
