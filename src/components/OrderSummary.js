import React from 'react'
import styled from 'styled-components'

import DiscountList from './DiscountList'
import SectionHeading from './SectionHeading'
import SelectionSummary from './SelectionSummary'
import TotalSummary from './TotalSummary'

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
      <SectionHeading>
        Order Summary
      </SectionHeading>
      <SelectionSummary />
      <DiscountList />
      <TotalSummary
        grandTotal={107}
      />
    </Wrapper>
  )
}

export default OrderSummary
