import React from 'react'
import styled from 'styled-components'

import { SectionHeading } from '../atoms'
import { ProductList } from '.'

const Wrapper = styled.section`
  padding: 40px 32px 40px 56px;
`

function ShoppingCart () {
  return (
    <Wrapper>
      <SectionHeading>
        Shopping cart
      </SectionHeading>
      <ProductList />
    </Wrapper>
  )
}

export default ShoppingCart
