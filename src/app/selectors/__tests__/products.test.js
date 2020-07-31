import {
  getShownInfoProductId,
  getIsLoadingProducts,
  getProduct,
  getProductList,
  getProductQuantity,
  getTotalProductsQuantity,
  getTotalProductsPrice,
  getSelectedProducts
} from '..'

describe('getIsLoadingProducts', () => {
  it('gets the loading state of the products when products are not loaded', () => {
    const state = {
      isLoadingProducts: true
    }

    expect(
      getIsLoadingProducts(state)
    ).toBe(true)
  })

  it('gets the loading state of the products when products are loaded', () => {
    const state = {
      isLoadingProducts: false
    }

    expect(
      getIsLoadingProducts(state)
    ).toBe(false)
  })
})

describe('getShownInfoProductId', () => {
  it('gets the shown info product id', () => {
    const state = {
      shownInfoProductId: 'MUG'
    }

    expect(
      getShownInfoProductId(state)
    ).toBe('MUG')
  })

  it('gets the null if no products are shown', () => {
    const state = {
      shownInfoProductId: null
    }

    expect(
      getShownInfoProductId(state)
    ).toBe(null)
  })
})

describe('getProduct', () => {
  it('gets a specific product', () => {
    const state = {
      productsById: {
        TSHIRT: {
          id: 'TSHIRT',
          name: 'Shirt'
        }
      }
    }

    expect(
      getProduct(state, 'TSHIRT')
    ).toMatchObject({
      id: 'TSHIRT',
      name: 'Shirt'
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
          name: 'Shirt'
        },
        MUG: {
          id: 'MUG',
          name: 'Mug'
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

describe('getTotalProductsQuantity', () => {
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

describe('getSelectedProducts', () => {
  it('gets a list of all the selected products', () => {
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
        MUG: 1
      }
    }

    expect(
      getSelectedProducts(state)
    ).toMatchObject([
      {
        id: 'TSHIRT',
        quantity: 2
      },
      {
        id: 'MUG',
        quantity: 1
      }
    ])
  })

  it('gets an empty list if there are no selected products', () => {
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
      getSelectedProducts(state)
    ).toMatchObject([])
  })
})
