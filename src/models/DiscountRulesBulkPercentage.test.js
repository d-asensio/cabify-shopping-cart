import DiscountRulesBulkPercentage from './DiscountRulesBulkPercentage'
import Product from './Product'

it('applies a discount if the entitled products reach the minimum required', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  })

  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  product.selectedQuantity = 3

  expect(
    discount.calculateFor([product])
  ).toBe(
    -3
  )
})

it('do not apply any discount if the entitled products DO NOT reach the minimum required', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  })

  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  product.selectedQuantity = 2

  expect(
    discount.calculateFor([product])
  ).toBe(
    0
  )
})

it('do not apply the discount if there are no products', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  })

  expect(
    discount.calculateFor([])
  ).toBe(
    0
  )
})

it('applies a discount to all entitled products if the minimum required is 0', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 0
  })

  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  product.selectedQuantity = 2

  expect(
    discount.calculateFor([product])
  ).toBe(
    -2
  )
})

it('applies a discount if the entitled products exceeds the minimum required', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  })

  const product = new Product({
    id: 'TSHIRT',
    name: 'Shirt',
    code: 'X7R2OPX',
    price: 20.00
  })

  product.selectedQuantity = 4

  expect(
    discount.calculateFor([product])
  ).toBe(
    -4
  )
})

it('applies discounts only to entitled products', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 2
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
  ).toBe(
    -2
  )
})

it('do not apply the discount if there are not entitled products', () => {
  const discount = new DiscountRulesBulkPercentage({
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 2
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
  ).toBe(
    0
  )
})
