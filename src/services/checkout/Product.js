
class Product {
  constructor ({ id, name, code, price }) {
    this._id = id
    this._name = name
    this._code = code
    this._price = price

    this._selectedQuantity = 0
  }

  get id () { return this._id }
  get name () { return this._name }
  get code () { return this._code }
  get price () { return this._price }
  get selectedQuantity () { return this._selectedQuantity }

  set selectedQuantity (selectedQuantity) {
    this._selectedQuantity = selectedQuantity
  }
}

export default Product
