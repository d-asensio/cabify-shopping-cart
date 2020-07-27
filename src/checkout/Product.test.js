import Product from './Product'

it('do not fail at initialization', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product).toBeInstanceOf(Product)
})

it('gets the "id"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product.id).toBe('TSHIRT')
})

it('gets the "name"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product.name).toBe('Shirt')
})

it('gets the "code"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product.code).toBe('X7R2OPX')
})

it('gets the "price"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product.price).toBe(20.00)
})

it('gets the "selectionQuantity"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  expect(product.selectedQuantity).toBe(0)
})

it('sets the "selectionQuantity"', () => {
  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  product.selectedQuantity = 13

  expect(product.selectedQuantity).toBe(13)
})
