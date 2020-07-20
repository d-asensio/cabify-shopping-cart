import { Checkout } from '../src/services'

describe('Checkout service', () => {
  it('do not fail at initialization', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(checkout).toBeInstanceOf(Checkout)
  })

  it('do not fail at scanning a valid product', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(() => {
      checkout.scan('TSHIRT')
    }).not.toThrowError()
  })

  it('returns an instance of `Checkout` to enable chaining', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(
      checkout.scan('TSHIRT')
    ).toBeInstanceOf(Checkout)
  })

  it('trows an exception at scanning a unexisting product', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(() => {
      checkout.scan('MUG')
    }).toThrowErrorMatchingSnapshot()
  })

  it('returns a total amount of 0 if no products have been scanned', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(
      checkout.total()
    ).toBe(0)
  })

  it('returns the correct total amount if one product have been scanned', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(
      checkout
        .scan('TSHIRT')
        .total()
    ).toBe(20)
  })

  it('returns the correct total amount if one product have been scanned multiple times', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        }
      ]
    })

    expect(
      checkout
        .scan('TSHIRT')
        .scan('TSHIRT')
        .total()
    ).toBe(40)
  })

  it('returns the correct total amount if multiple different products have been scanned', () => {
    const checkout = new Checkout({
      products: [
        {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00
        },
        {
          id: 'MUG',
          name: 'Mug',
          code: 'X7R2OPY',
          price: 5.00
        },
        {
          id: 'CAP',
          name: 'Cap',
          code: 'X7R2OPZ',
          price: 10.00
        }
      ]
    })

    expect(
      checkout
        .scan('TSHIRT')
        .scan('MUG')
        .scan('CAP')
        .total()
    ).toBe(35)
  })
})
