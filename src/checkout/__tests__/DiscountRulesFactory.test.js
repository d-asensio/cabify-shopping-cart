import DiscountRulesFactory from '../DiscountRulesFactory'

import DiscountRulesBuy1Get2 from '../DiscountRulesBuy1Get2.js'
import DiscountRulesBulkPercentage from '../DiscountRulesBulkPercentage.js'

it('fails when initialized with a unsupported discount type', () => {
  expect(
    () => DiscountRulesFactory.create('UNSUPPORTED_DISCOUNT')
  ).toThrowErrorMatchingSnapshot()
})

it('creates a BUY_1_GET_2 discount rule', () => {
  const discountRule = DiscountRulesFactory.create('BUY_1_GET_2', {
    entitledProductId: 'MUG'
  })

  expect(
    discountRule
  ).toBeInstanceOf(DiscountRulesBuy1Get2)
})

it('creates a BULK_PERCENTAGE discount rule', () => {
  const discountRule = DiscountRulesFactory.create('BULK_PERCENTAGE', {
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  })

  expect(
    discountRule
  ).toBeInstanceOf(DiscountRulesBulkPercentage)
})
