export default {
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
    },
    CAP: {
      id: 'CAP',
      name: 'Cap',
      code: 'X7R2OPZ',
      price: 10.00,
      imageSrc: 'images/thumbnails/cap.png'
    }
  },
  productCountersById: {},
  discounts: [
    {
      name: '2x1 Mug offer',
      amount: -10.00
    },
    {
      name: 'x3 Shirt offer',
      amount: -3.00
    },
    {
      name: 'Promo code',
      amount: 0
    }
  ]
}
