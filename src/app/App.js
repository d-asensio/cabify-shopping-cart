import React from 'react'
import styled from 'styled-components'

import {
  Dialog,
  ShoppingCart,
  OrderSummary
} from './components'

const Wrapper = styled(Dialog)`
  display: grid;
  grid-template-columns: auto minmax(auto, 312px);
`
function App () {
  return (
    <Wrapper as='main'>
      <ShoppingCart />
      <OrderSummary />
    </Wrapper>
  )
}

export default App
