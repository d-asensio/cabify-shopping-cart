import Product from './Product'

class Checkout {
  constructor ({ products }) {
    this._initializeProducts(products)
  }

  scan (productId) {
    this._productExistOrThrow(productId)
    this._selectProductById(productId)

    return this
  }

  total () {
    const products = this._productsById.values()
    let total = 0

    for (const { price, selectedQuantity } of products) {
      total += price * selectedQuantity
    }

    return total
  }

  _initializeProducts (products) {
    const productsMap = new Map()

    for (const productData of products) {
      productsMap.set(
        productData.id,
        new Product(productData)
      )
    }

    this._productsById = productsMap
  }

  _productExistOrThrow (productId) {
    if (!this._productsById.get(productId)) {
      throw new Error(
        `'The product identified by "${productId}" is not in the product list, please provide a valid "productId"'`
      )
    }
  }

  _selectProductById (productId) {
    const product = this._productsById.get(productId)

    product.selectedQuantity += 1
  }
}

export default Checkout
