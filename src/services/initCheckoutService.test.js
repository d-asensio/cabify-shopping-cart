import initCheckoutService from './initCheckoutService'

const createFetchMock = getResponse => jest.fn(
  async (...params) => ({
    json: async () => getResponse(...params)
  })
)

describe('initialization', () => {
  it('do not fail when it is initialized without parameters', () => {
    expect(() => {
      initCheckoutService()
    }).not.toThrowError()
  })

  it('do not fail when it is initialized with an empty dependencies object', () => {
    expect(() => {
      initCheckoutService({})
    }).not.toThrowError()
  })
})

describe('getAvailableProducts', () => {
  it('hits the right API endpoint', async () => {
    const fetch = createFetchMock(() => [])

    const checkoutService = initCheckoutService({ fetch })

    await checkoutService.getAvailableProducts()

    expect(
      fetch.mock.calls[0][0]
    ).toBe(
      '/data/products.json'
    )
  })

  it('gets products that are returned from the API', async () => {
    const fetch = createFetchMock(() => [
      {
        id: 'TSHIRT',
        name: 'Shirt',
        code: 'X7R2OPX',
        price: 20.0,
        imageSrc: 'images/thumbnails/shirt.png'
      }
    ])

    const checkoutService = initCheckoutService({ fetch })

    expect(
      await checkoutService.getAvailableProducts()
    ).toMatchObject([
      {
        id: 'TSHIRT',
        name: 'Shirt',
        code: 'X7R2OPX',
        price: 20.0,
        imageSrc: 'images/thumbnails/shirt.png'
      }
    ])
  })
})

describe('getSummaryForSelection', () => {
  it('hits the right API endpoints', async () => {
    const fetch = createFetchMock(() => [])

    const checkoutService = initCheckoutService({ fetch })

    await checkoutService.getSummaryForSelection([])

    expect(
      fetch.mock.calls[0][0]
    ).toBe(
      '/data/products.json'
    )

    expect(
      fetch.mock.calls[1][0]
    ).toBe(
      '/data/discounts.json'
    )
  })

  it('returns the summary using the API data', async () => {
    const fetch = createFetchMock(endpoint => ({
      '/data/products.json': [
        {
          id: 'MUG',
          name: 'Mug',
          code: 'X7R2OPY',
          price: 5.00
        }
      ],
      '/data/discounts.json': [
        {
          type: 'BUY_1_GET_2',
          name: '2x1 Mug offer',
          options: {
            entitledProductId: 'MUG'
          }
        }
      ]
    }[endpoint]))

    const checkoutService = initCheckoutService({ fetch })

    const summary = await checkoutService.getSummaryForSelection([
      {
        id: 'MUG',
        quantity: 3
      }
    ])

    expect(
      summary
    ).toMatchObject({
      discounts: [
        {
          name: '2x1 Mug offer',
          amount: -5.00
        }
      ],
      total: 10
    })
  })
})
