import React from 'react'
import styled from 'styled-components'

import {
  ProductList
} from './components'

const Wrapper = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;

  padding: 40px 32px 40px 56px;

  transform: translate(-50%, -50%);

  width: calc(100% - 64px);
  height: calc(100% - 64px);

  max-width: 1088px;
  max-height: 648px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  border-radius: 4px;
`
function App () {
  return (
    <Wrapper>
      <ProductList />
    </Wrapper>
  )
}

export default App
