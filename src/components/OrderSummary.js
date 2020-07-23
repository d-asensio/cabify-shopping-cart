import React from 'react'
import styled from 'styled-components'

import DiscountList from './DiscountList'
import SectionHeading from './SectionHeading'
import SelectionSummary from './SelectionSummary'

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
      <SelectionSummary
        selectedItemsCount={11}
        totalPrice={120}
      />
      <DiscountList
        discounts={[
          {
            name: '2x1 Mug offer',
            amount: -10.00
          },
          {
            name: 'x3 Shirt offer',
            amount: -3.00
          },
          {
            name: 'Promo code',
            amount: 0
          }
        ]}
      />
    </Wrapper>
  )
}

export default OrderSummary
