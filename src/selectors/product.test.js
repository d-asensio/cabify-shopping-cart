import {
  getProduct,
  getProductList,
  getProductQuantity
} from './index'

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

describe('getProductList', () => {
  it('gets a list of the product ids', () => {
    const state = {
      productsById: {
        TSHIRT: {
          id: 'TSHIRT',
          name: 'Shirt',
          code: 'X7R2OPX',
          price: 20.00,
          imageSrc: 'images/thumbnails/shirt.png'
        },
        MUG: {
          id: 'MUG',
          name: 'Mug',
          code: 'X7R2OPY',
          price: 5.00,
          imageSrc: 'images/thumbnails/mug.png'
        }
      }
    }

    expect(
      getProductList(state)
    ).toMatchObject([
      'TSHIRT',
      'MUG'
    ])
  })

  it('gets an empty list if there are no available products', () => {
    const state = {
      productsById: {}
    }

    expect(
      getProductList(state)
    ).toMatchObject([])
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
