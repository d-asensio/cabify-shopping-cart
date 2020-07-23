import React from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../reducers'
import { getProductQuantity } from '../selectors'

import Stepper from './Stepper'
import ProductDetails from './ProductDetails'
import TableGrid from './TableGrid'

const PriceText = styled.span`
  font-size: 16px;

  white-space: nowrap;

  color: #000;
`

function ProductLine ({
  id,
  name,
  code,
  unitPrice,
  imageSrc
}) {
  const dispatch = useDispatch()

  const quantity = useSelector(
    state => getProductQuantity(state, id)
  )

  const handleQuantityChange = quantity => dispatch(
    actions.updateProductCounter({
      id,
      quantity
    })
  )

  const handleDecrease = () => dispatch(
    actions.updateProductCounter({
      id,
      quantity: quantity - 1
    })
  )

  const handleIncrease = () => dispatch(
    actions.updateProductCounter({
      id,
      quantity: quantity + 1
    })
  )

  return (
    <TableGrid.Row>
      <ProductDetails
        imageSrc={imageSrc}
        name={name}
        code={code}
      />
      <Stepper
        value={quantity}
        onChange={handleQuantityChange}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
      <PriceText>{unitPrice} €</PriceText>
      <PriceText>{unitPrice * quantity} €</PriceText>
    </TableGrid.Row>
  )
}

export default ProductLine
