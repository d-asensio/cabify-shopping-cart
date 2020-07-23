import { getProduct, getProductQuantity } from './index'

describe('getProduct', () => {
  it('gets a specific product', () => {
    const state = {
      productsById: {
        TSHIRT: {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00,
          imageSrc: 'images/thumbnails/shirt.png'
        }
      }
    }

    expect(
      getProduct(state, 'TSHIRT')
    ).toMatchObject({
      id: 'TSHIRT',
      name: 'Shirt',
      code: 'X7R2OPX',
      price: 20.00,
      imageSrc: 'images/thumbnails/shirt.png'
    })
  })

  it('returns undefined if the requested product counter is not defined', () => {
    const state = {
      productsById: {}
    }

    expect(
      getProduct(state, 'TSHIRT')
    ).toBe(undefined)
  })
})

describe('getProductQuantity', () => {
  it('gets the quantity of a specific product', () => {
    const state = {
      productCountersById: {
        TSHIRT: 2
      }
    }

    expect(
      getProductQuantity(state, 'TSHIRT')
    ).toBe(2)
  })

  it('returns 0 if the requested product counter is not still defined (have never been updated)', () => {
    const state = {
      productCountersById: {}
    }

    expect(
      getProductQuantity(state, 'TSHIRT')
    ).toBe(0)
  })
})
