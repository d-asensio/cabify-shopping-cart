import React from 'react'
import styled from 'styled-components'

import {
  ShoppingCart,
  OrderSummary
} from './components'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto minmax(auto, 312px);

  overflow: hidden;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: calc(100% - 64px);
  height: calc(100% - 64px);

  max-width: 1088px;
  max-height: 648px;

  background-color: #fff;

  border-radius: 4px;
`
function App () {
  return (
    <Wrapper>
      <ShoppingCart />
      <OrderSummary />
    </Wrapper>
  )
}

export default App
