import React from 'react'
import styled from 'styled-components'

import Stepper from './Stepper'
import ProductDetails from './ProductDetails'
import TableGrid from './TableGrid'

const PriceText = styled.span`
  font-size: 16px;

  white-space: nowrap;

  color: #000;
`

function ProductLine ({
  name,
  code,
  quantity,
  unitPrice,
  imageSrc,
  onChangeQuantity,
  onDecreaseQuantity,
  onIncreaseQuantity
}) {
  return (
    <TableGrid.Row>
      <ProductDetails
        imageSrc={imageSrc}
        name={name}
        code={code}
      />
      <Stepper
        value={quantity}
        onChange={onChangeQuantity}
        onDecrease={onDecreaseQuantity}
        onIncrease={onIncreaseQuantity}
      />
      <PriceText>{unitPrice} €</PriceText>
      <PriceText>{unitPrice * quantity} €</PriceText>
    </TableGrid.Row>
  )
}

export default ProductLine
