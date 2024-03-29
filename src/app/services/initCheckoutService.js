import memoize from 'lodash.memoize'

import Checkout from '../../checkout'

function initCheckoutService ({ fetch = window.fetch, hostUrl = '' } = {}) {
  const baseUrl = `${hostUrl}/data`

  let checkout = null

  const _getServiceData = memoize(async (dataPath) => {
    const response = await fetch(`${baseUrl}/${dataPath}.json`)
    return response.json()
  })

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
