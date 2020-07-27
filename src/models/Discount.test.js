import Discount from './Discount'

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
