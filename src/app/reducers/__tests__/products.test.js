import { reducer, actions } from '..'

describe('fetchProducts', () => {
  it('sets the loading state to `true`', () => {
    const state = {
      isLoadingProducts: false
    }

    const newState = reducer(
      state,
      actions.fetchProducts()
    )

    expect(
      newState.isLoadingProducts
    ).toBe(true)
  })
})

describe('receiveProducts', () => {
  it('indexes received products by id', () => {
    const state = {
      productsById: {}
    }

    const newState = reducer(
      state,
      actions.receiveProducts({
        products: [
          {
            id: 'TSHIRT',
            name: 'Shirt'
          },
          {
            id: 'MUG',
            name: 'Mug'
          }
        ]
      })
    )

    expect(
      newState.productsById
    ).toMatchObject({
      TSHIRT: {
        id: 'TSHIRT',
        name: 'Shirt'
      },
      MUG: {
        id: 'MUG',
        name: 'Mug'
      }
    })
  })

  it('sets the loading state to `false`', () => {
    const state = {
      isLoadingProducts: true
    }

    const newState = reducer(
      state,
      actions.receiveProducts({
        products: []
      })
    )

    expect(
      newState.isLoadingProducts
    ).toBe(false)
  })
})

describe('updateProductCounter', () => {
  it('updates the product counter if the provided quantity is positive', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: 2
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(2)
  })

  it('updates the product counter if the provided quantity is zero', () => {
    const state = {
      productCountersById: {
        TSHIRT: 3
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: 0
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })

  it('do not update the product counter if the provided quantity is negative', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.updateProductCounter({
        id: 'TSHIRT',
        quantity: -2
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })
})

describe('decreaseProductCounter', () => {
  it('decreases the product quantity', () => {
    const state = {
      productCountersById: {
        TSHIRT: 10
      }
    }

    const newState = reducer(
      state,
      actions.decreaseProductCounter({
        id: 'TSHIRT'
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(9)
  })

  it('decreases the product quantity to zero', () => {
    const state = {
      productCountersById: {
        TSHIRT: 1
      }
    }

    const newState = reducer(
      state,
      actions.decreaseProductCounter({
        id: 'TSHIRT'
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })

  it('do not decreases if the quantity is zero', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.decreaseProductCounter({
        id: 'TSHIRT'
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(0)
  })
})

describe('increaseProductCounter', () => {
  it('increases the product quantity', () => {
    const state = {
      productCountersById: {
        TSHIRT: 0
      }
    }

    const newState = reducer(
      state,
      actions.increaseProductCounter({
        id: 'TSHIRT'
      })
    )

    expect(
      newState.productCountersById.TSHIRT
    ).toBe(1)
  })
})

describe('openProductInfo', () => {
  it('sets the shownInfoProductId', () => {
    const state = {
      shownInfoProductId: null
    }

    const newState = reducer(
      state,
      actions.openProductInfo({
        id: 'MUG'
      })
    )

    expect(
      newState.shownInfoProductId
    ).toBe('MUG')
  })

  it('changes the shownInfoProductId', () => {
    const state = {
      shownInfoProductId: 'MUG'
    }

    const newState = reducer(
      state,
      actions.openProductInfo({
        id: 'TSHIRT'
      })
    )

    expect(
      newState.shownInfoProductId
    ).toBe('TSHIRT')
  })
})

describe('closeProductInfo', () => {
  it('unsets the shownInfoProductId', () => {
    const state = {
      shownInfoProductId: 'MUG'
    }

    const newState = reducer(
      state,
      actions.closeProductInfo()
    )

    expect(
      newState.shownInfoProductId
    ).toBe(null)
  })
})
