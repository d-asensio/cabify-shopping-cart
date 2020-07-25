export default {
  isLoadingProducts: true,
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
  /**
   * The following properties are calculated by a external service which knows about business rules, that is the reason
   * why those can not be deduced directly from the state via a selector.
  */
  discounts: [],
  grandTotal: 0
}
