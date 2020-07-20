
class Checkout {
  constructor ({ products }) {
    const normalizedProducts = this._normalizeProducts(products)

    this._productsById = this._indexProductsById(normalizedProducts)
  }

  scan (productId) {
    this._productExistOrThrow(productId)
    this._selectProductById(productId)

    return this
  }

  total () {
    let total = 0

    for (const { price, selectedQuantity } of this._productsById.values()) {
      total += price * selectedQuantity
    }

    return total
  }

  _normalizeProducts (products) {
    return products.map(
      product => ({
        selectedQuantity: 0,
        ...product
      })
    )
  }

  _indexProductsById (products) {
    const productsMap = new Map()

    for (const product of products) {
      productsMap.set(product.id, product)
    }

    return productsMap
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
