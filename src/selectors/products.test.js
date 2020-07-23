import {
  getProduct,
  getProductList,
  getProductQuantity,
  getTotalProductsQuantity,
  getTotalProductsPrice
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

describe('getAllProductsQuantity', () => {
  it('gets the sum of all the product counters', () => {
    const state = {
      productCountersById: {
        TSHIRT: 2,
        CAP: 2,
        MUG: 1
      }
    }

    expect(
      getTotalProductsQuantity(state)
    ).toBe(5)
  })

  it('gets 0 if there are no selected products', () => {
    const state = {
      productCountersById: {}
    }

    expect(
      getTotalProductsQuantity(state)
    ).toBe(0)
  })
})

describe('getTotalProductsPrice', () => {
  it('gets the total price of all the products', () => {
    const state = {
      productsById: {
        TSHIRT: {
          price: 20.00
        },
        CAP: {
          price: 5.00
        },
        MUG: {
          price: 10.00
        }
      },
      productCountersById: {
        TSHIRT: 2,
        CAP: 2,
        MUG: 1
      }
    }

    expect(
      getTotalProductsPrice(state)
    ).toBe(60)
  })

  it('gets 0 if there are no selected products', () => {
    const state = {
      productsById: {
        TSHIRT: {
          price: 20.00
        },
        CAP: {
          price: 5.00
        },
        MUG: {
          price: 10.00
        }
      },
      productCountersById: {}
    }

    expect(
      getTotalProductsPrice(state)
    ).toBe(0)
  })
})
