import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../../reducers'
import { getProduct, getProductQuantity } from '../../../selectors'

import { Stepper, TableGrid } from '../../primitives'
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
    thumbnailSrc
  } = useSelector(
    state => getProduct(state, id)
  )

  const quantity = useSelector(
    state => getProductQuantity(state, id)
  )

  const handleDetailsClick = () => dispatch(
    actions.openProductInfo({ id })
  )

  const handleQuantityChange = quantity => dispatch(
    actions.updateProductCounter({
      id,
      quantity
    })
  )

  const handleDecrease = () => dispatch(
    actions.decreaseProductCounter({
      id
    })
  )

  const handleIncrease = () => dispatch(
    actions.increaseProductCounter({
      id
    })
  )

  return (
    <TableGrid.Row>
      <ProductDetails
        thumbnailSrc={thumbnailSrc}
        name={name}
        code={code}
        onClick={handleDetailsClick}
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

ProductLine.propTypes = {
  id: PropTypes.string
}

export default ProductLine
