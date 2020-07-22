import React from 'react'
import styled from 'styled-components'

import SectionHeading from './SectionHeading'

const Wrapper = styled.aside`
  padding: 40px 32px;

  background-color: #f3f3f3;
`

function OrderSummary () {
  return (
    <Wrapper>
      <SectionHeading>
        Order Summary
      </SectionHeading>
    </Wrapper>
  )
}

export default OrderSummary
