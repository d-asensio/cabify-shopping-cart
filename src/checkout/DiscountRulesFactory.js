import DiscountRulesBuy1Get2 from './DiscountRulesBuy1Get2.js'
import DiscountRulesBulkPercentage from './DiscountRulesBulkPercentage.js'

class DiscountRulesFactory {
  static createDiscountRule (type, options) {
    switch (type) {
      case 'BUY_1_GET_2':
        return new DiscountRulesBuy1Get2(options)
      case 'BULK_PERCENTAGE':
        return new DiscountRulesBulkPercentage(options)
      default:
        throw new Error(
          `The "${type}" discount type is not supported, plase, provide a valid discount type`
        )
    }
  }
}

export default DiscountRulesFactory
