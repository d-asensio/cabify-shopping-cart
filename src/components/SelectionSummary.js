import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 32px;
  margin-bottom: 24px;
  
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
`

const ItemsCounter = styled.span`
  font-size: 14px;

  line-height: 17px;
  white-space: nowrap;

  color: #212240;
`

const TotalPrice = styled.span`
  font-size: 16px;
  font-weight: 700;

  line-height: 17px;
  white-space: nowrap;

  color: #212240;
`

function SelectionSummary ({ selectedItemsCount, totalPrice }) {
  return (
    <Wrapper>
      <ItemsCounter>
        {selectedItemsCount} Items
      </ItemsCounter>
      <TotalPrice>
        {totalPrice} €
      </TotalPrice>
    </Wrapper>
  )
}

export default SelectionSummary
