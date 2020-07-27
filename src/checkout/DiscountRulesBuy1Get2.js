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

export default DiscountRulesBuy1Get2
