import React from 'react'
import styled from 'styled-components'

import { Heading } from '../primitives'
import { DiscountList, SelectionSummary, TotalSummary } from '.'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 40px 32px;

  background-color: #f3f3f3;

  ${DiscountList} {
    flex-basis: 100%;
  }
`

function OrderSummary () {
  return (
    <Wrapper>
      <Heading>
        Order Summary
      </Heading>
      <SelectionSummary />
      <DiscountList />
      <TotalSummary />
    </Wrapper>
  )
}

export default OrderSummary
