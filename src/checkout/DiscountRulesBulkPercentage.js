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

export default DiscountRulesBulkPercentage
