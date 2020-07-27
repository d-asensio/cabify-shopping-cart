import DiscountRulesFactory from './DiscountRulesFactory'

class Discount {
  constructor ({ type, name, options }) {
    this._name = name
    this._discountRules = DiscountRulesFactory.create(type, options)
  }

  get name () { return this._name }

  calculateFor (products) {
    return this._discountRules.calculateFor(products)
  }
}

export default Discount
