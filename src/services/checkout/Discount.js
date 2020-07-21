class DiscountRulesBuy1Get2 {
  constructor ({ entitledProductId }) {
    this._entitledProductId = entitledProductId
  }

  calculateFor (products) {
    const entitledProduct = this._findEntitledProduct(products)

    return this._calculateDiscountForEntitledProduct(entitledProduct)
  }

  _findEntitledProduct (products) {
    return products.find(
      product => product.id === this._entitledProductId
    )
  }

  _calculateDiscountForEntitledProduct (entitledProduct) {
    if (!entitledProduct) return 0

    const itemsToDiscount = Math.floor(entitledProduct.selectedQuantity / 2)
    const totalItemsDiscountPrice = itemsToDiscount * entitledProduct.price

    return totalItemsDiscountPrice * -1
  }
}

class DiscountRulesBulkPercentage {
  constructor ({ entitledProductId, percentage, minimumSelectionQuantity }) {
    this._entitledProductId = entitledProductId
    this._percentage = percentage
    this._minimumSelectionQuantity = minimumSelectionQuantity
  }

  calculateFor (products) {
    const entitledProduct = this._findEntitledProduct(products)

    return this._calculateDiscountForEntitledProduct(entitledProduct)
  }

  _findEntitledProduct (products) {
    return products.find(
      product => product.id === this._entitledProductId
    )
  }

  _calculateDiscountForEntitledProduct (entitledProduct) {
    if (!entitledProduct) return 0
    if (!this._isProductEligibleForDiscount(entitledProduct)) return 0

    const discountPerUnit = entitledProduct.price * this._percentage / 100
    const totalItemsDiscountPrice = discountPerUnit * entitledProduct.selectedQuantity

    return totalItemsDiscountPrice
  }

  _isProductEligibleForDiscount (product) {
    return product.selectedQuantity >= this._minimumSelectionQuantity
  }
}

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

class Discount {
  constructor ({ type, name, options }) {
    this._name = name
    this._discountRules = DiscountRulesFactory.createDiscountRule(type, options)
  }

  get name () { return this._name }

  calculateFor (products) {
    return this._discountRules.calculateFor(products)
  }
}

export default Discount
