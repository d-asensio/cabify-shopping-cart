
class Checkout {
  constructor ({ products }) {
    this._indexProductsById(products)
    this._initializeProductsSelectionQuantity()
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

  _indexProductsById (products) {
    const productsMap = new Map()

    for (const product of products) {
      productsMap.set(product.id, product)
    }

    this._productsById = productsMap
  }

  _initializeProductsSelectionQuantity () {
    for (const product of this._productsById.values()) {
      product.selectedQuantity = 0
    }
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
