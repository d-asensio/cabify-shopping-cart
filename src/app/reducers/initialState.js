export default Object.freeze({
  isLoadingProducts: true,
  shownInfoProductId: null,
  productsById: {},
  productCountersById: {},
  /**
   * The following properties are calculated by a external service which knows about business rules, that is the reason
   * why those can not be deduced directly from the state via a selector.
  */
  discounts: [],
  grandTotal: 0
})
