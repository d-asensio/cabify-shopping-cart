import { Checkout } from '../models'

const initCheckoutService = function ({ fetch = window.fetch } = {}) {
  const SERVICE_URL = '/data'

  let checkout = null

  async function getAvailableProducts () {
    return _getServiceData('products')
  }

  async function getSummaryForSelection (selectedProducts) {
    await _initNewCheckout()

    _applySelectionToCheckout(selectedProducts)

    return {
      discounts: checkout.discountsBreakdown(),
      total: checkout.total()
    }
  }

  async function _getServiceData (dataPath) {
    const response = await fetch(`${SERVICE_URL}/${dataPath}.json`)
    return response.json()
  }

  async function _initNewCheckout () {
    const products = await _getServiceData('products')
    const discounts = await _getServiceData('discounts')

    checkout = new Checkout({
      products,
      discounts
    })
  }

  function _applySelectionToCheckout (selectedProducts) {
    for (const selectedProduct of selectedProducts) {
      checkout.scan(
        selectedProduct.id,
        selectedProduct.quantity
      )
    }
  }

  return {
    getAvailableProducts,
    getSummaryForSelection
  }
}

export default initCheckoutService
