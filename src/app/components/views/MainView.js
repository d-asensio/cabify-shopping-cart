import React from 'react'

import {
  Layout,
  Modal
} from '../primitives'

import {
  ShoppingCart,
  OrderSummary
} from '../partials'

function MainView () {
  return (
    <Modal>
      <Layout as='main'>
        <ShoppingCart />
        <OrderSummary />
      </Layout>
    </Modal>
  )
}

export default MainView
