import React from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../../reducers'
import { getProduct, getProductQuantity } from '../../../selectors'

import { Stepper, TableGrid } from '../../atoms'
import { ProductDetails } from '../'

const PriceText = styled.span`
  font-size: 16px;

  white-space: nowrap;

  color: #000;
`

function ProductLine ({ id }) {
  const dispatch = useDispatch()

  const {
    name,
    code,
    price,
    imageSrc
  } = useSelector(
    state => getProduct(state, id)
  )

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
      <PriceText>{price} €</PriceText>
      <PriceText>{price * quantity} €</PriceText>
    </TableGrid.Row>
  )
}

export default ProductLine
