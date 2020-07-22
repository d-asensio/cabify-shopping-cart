import React from 'react'
import styled from 'styled-components'

import { ProductDetails } from './components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  border-radius: 4px;
`

function App () {
  return (
    <Wrapper>
      <ProductDetails
        imageSrc='images/thumbnails/shirt.png'
        name='Shirt'
        code='X7R2OPX'
      />
      <ProductDetails
        imageSrc='images/thumbnails/mug.png'
        name='Mug'
        code='X7R2OPZ'
      />
      <ProductDetails
        imageSrc='images/thumbnails/cap.png'
        name='Cap'
        code='X7R2OPY'
      />
    </Wrapper>
  )
}

export default App
