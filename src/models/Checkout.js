import Discount from './Discount'
import Product from './Product'

class Checkout {
  constructor ({ products, discounts = [] }) {
    this._productsById = new Map()
    this._discounts = []

    this._initializeProducts(products)
    this._initializeDiscounts(discounts)
  }

  get _products () {
    return Array.from(
      this._productsById.values()
    )
  }

  scan (productId, selectedQuantity = 1) {
    this._productExistOrThrow(productId)
    this._selectProductById(productId, selectedQuantity)

    return this
  }

  total () {
    const totalPrice = this._selectedProductsTotalPrice()
    const totalDiscount = this._selectedProductsTotalDiscount()

    return totalPrice + totalDiscount
  }

  discountsBreakdown () {
    return this._selectedProductsAppliedDiscounts()
  }

  _selectedProductsTotalPrice () {
    return this._products.reduce(
      (acc, { price, selectedQuantity }) =>
        acc + price * selectedQuantity,
      0
    )
  }

  _selectedProductsAppliedDiscounts () {
    return this._discounts
      .map(
        discount => {
          const name = discount.name
          const amount = discount.calculateFor(this._products)

          if (!amount) return false

          return { name, amount }
        }
      )
      .filter(Boolean)
  }

  _selectedProductsTotalDiscount () {
    return this._discounts.reduce(
      (acc, discount) =>
        acc + discount.calculateFor(this._products),
      0
    )
  }

  _initializeProducts (products) {
    for (const productData of products) {
      this._productsById.set(
        productData.id,
        new Product(productData)
      )
    }
  }

  _initializeDiscounts (discounts) {
    for (const discountData of discounts) {
      this._discounts.push(
        new Discount(discountData)
      )
    }
  }

  _productExistOrThrow (productId) {
    if (!this._productsById.get(productId)) {
      throw new Error(
        `'The product identified by "${productId}" is not in the product list, please provide a valid "productId"'`
      )
    }
  }

  _selectProductById (productId, selectedQuantity) {
    const product = this._productsById.get(productId)

    product.selectedQuantity += selectedQuantity
  }
}

export default Checkout
