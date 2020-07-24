import Discount from './Discount'
import Product from './Product'

it('do not fail at initialization', () => {
  const discount = new Discount({
    type: 'BUY_1_GET_2',
    name: '2x1 Mug offer',
    options: {
      entitledProductId: 'MUG'
    }
  })

  expect(discount).toBeInstanceOf(Discount)
})

it('fails when initialized with a unsupported discount type', () => {
  expect(() => new Discount({
    type: 'UNSUPPORTED_DISCOUNT',
    name: 'Unsuported discount',
    options: {}
  })).toThrowErrorMatchingSnapshot()
})

it('gets the "name"', () => {
  const discount = new Discount({
    type: 'BUY_1_GET_2',
    name: '2x1 Mug offer',
    options: {
      entitledProductId: 'MUG'
    }
  })

  expect(discount.name).toBe('2x1 Mug offer')
})

describe('BUY_1_GET_2 discount type', () => {
  it('applies the right discount for 2 entitled products (1 of them is free)', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
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
      -5
    )
  })

  it('do not apply the discount for a single product', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
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
    ).toBe(
      -0
    )
  })

  it('do not apply the discount if there are no products', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
    })

    expect(
      discount.calculateFor([])
    ).toBe(
      0
    )
  })

  it('applies discounts only to entitled products', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
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
      -5
    )
  })

  it('do not apply the discount if there are not entitled products', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT'
      }
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

  it('applies the right discount when there are 4 entitled products (2 of them are free)', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
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
    ).toBe(
      -10
    )
  })

  it('applies the right discount when there are 3 entitled products (1 of them is free)', () => {
    const discount = new Discount({
      type: 'BUY_1_GET_2',
      name: '2x1 Mug offer',
      options: {
        entitledProductId: 'MUG'
      }
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
    ).toBe(
      -5
    )
  })
})

describe('BULK_PERCENTAGE discount type', () => {
  it('applies a discount if the entitled products reach the minimum required', () => {
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 3
      }
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
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 3
      }
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
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 3
      }
    })

    expect(
      discount.calculateFor([])
    ).toBe(
      0
    )
  })

  it('applies a discount to all entitled products if the minimum required is 0', () => {
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 0
      }
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
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 3
      }
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
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 2
      }
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
    const discount = new Discount({
      type: 'BULK_PERCENTAGE',
      name: 'x3 Shirt offer',
      options: {
        entitledProductId: 'TSHIRT',
        percentage: -5,
        minimumSelectionQuantity: 2
      }
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
})
