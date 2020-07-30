import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import {
  getTotalProductsQuantity,
  getTotalProductsPrice
} from '../../selectors'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 32px;
  margin-bottom: 24px;
  
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
`

const TotalProducts = styled.span`
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

function SelectionSummary () {
  const totalProductsQuantity = useSelector(
    getTotalProductsQuantity
  )

  const totalProductsPrice = useSelector(
    getTotalProductsPrice
  )

  return (
    <Wrapper>
      <TotalProducts>
        {totalProductsQuantity} Items
      </TotalProducts>
      <TotalPrice>
        {totalProductsPrice} €
      </TotalPrice>
    </Wrapper>
  )
}

export default SelectionSummary
