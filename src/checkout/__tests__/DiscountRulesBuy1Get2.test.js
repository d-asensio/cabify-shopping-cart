import DiscountRulesBuy1Get2 from '../DiscountRulesBuy1Get2'
import Product from '../Product'

it('applies the right discount for 2 entitled products (1 of them is free)', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  const product = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  product.selectedQuantity = 2

  expect(
    discount.calculateFor([product])
  ).toBe(-5)
})

it('do not apply the discount for a single product', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  const product = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  product.selectedQuantity = 1

  expect(
    discount.calculateFor([product])
  ).toBe(-0)
})

it('do not apply the discount if there are no products', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  expect(
    discount.calculateFor([])
  ).toBe(0)
})

it('applies discounts only to entitled products', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  const productA = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  productA.selectedQuantity = 2

  const productB = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  productB.selectedQuantity = 2

  expect(
    discount.calculateFor([productA, productB])
  ).toBe(-5)
})

it('do not apply the discount if there are not entitled products', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'TSHIRT'
  })

  const product = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  product.selectedQuantity = 2

  expect(
    discount.calculateFor([product])
  ).toBe(0)
})

it('applies the right discount when there are 4 entitled products (2 of them are free)', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  const product = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  product.selectedQuantity = 4

  expect(
    discount.calculateFor([product])
  ).toBe(-10)
})

it('applies the right discount when there are 3 entitled products (1 of them is free)', () => {
  const discount = new DiscountRulesBuy1Get2({
    entitledProductId: 'MUG'
  })

  const product = new Product({
    id: 'MUG',
    name: 'Mug',
    code: 'X7R2OPY',
    price: 5.00
  })

  product.selectedQuantity = 3

  expect(
    discount.calculateFor([product])
  ).toBe(-5)
})
