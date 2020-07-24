import { createDeepEqualSelector } from '../utils'

/**
 * This is created as a deepEqual selector because discounts are provided by an external service as an object, so there
 * is no other way to guess if it has changed or not. This small optimization will prevent repaints in case discounts
 * are updated but have not changed its structure  (which is likely to happen).
 */
export const getDiscounts = createDeepEqualSelector(
  ({ discounts }) => discounts,
  discounts => discounts
)

export const getGrandTotal = ({ grandTotal }) => grandTotal
