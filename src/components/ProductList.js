import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import TableGrid from './TableGrid'
import ProductLine from './ProductLine'

const ListTitle = styled.span`
  font-size: 10px;

  letter-spacing: 1px;
  line-height: 16px;
  
  color: #a6a7b3;
  
  text-transform: uppercase;
`

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue)

  const handleDecrease = useCallback(
    () => setValue(value - 1),
    [value]
  )

  const handleIncrease = useCallback(
    () => setValue(value + 1),
    [value]
  )

  return {
    value,
    handleChange: setValue,
    handleDecrease,
    handleIncrease
  }
}

function ProductList () {
  const {
    value: quantity,
    handleChange,
    handleDecrease,
    handleIncrease
  } = useCounter(0)

  return (
    <TableGrid
      columnsTemplate={['45%', '20%', '20%', '15%']}
      columnAlignments={['left']}
    >
      <TableGrid.Row>
        <ListTitle>PRODUCT DETAILS</ListTitle>
        <ListTitle>QUANTITY</ListTitle>
        <ListTitle>PRICE</ListTitle>
        <ListTitle>TOTAL</ListTitle>
      </TableGrid.Row>
      <ProductLine
        name='Shirt'
        code='X7R2OPX'
        quantity={quantity}
        unitPrice={20.00}
        imageSrc='images/thumbnails/shirt.png'
        onChangeQuantity={handleChange}
        onDecreaseQuantity={handleDecrease}
        onIncreaseQuantity={handleIncrease}
      />
      <ProductLine
        name='Mug'
        code='X7R2OPZ'
        quantity={quantity}
        unitPrice={5.00}
        imageSrc='images/thumbnails/mug.png'
        onChangeQuantity={handleChange}
        onDecreaseQuantity={handleDecrease}
        onIncreaseQuantity={handleIncrease}
      />
      <ProductLine
        name='Cap'
        code='X7R2OPY'
        quantity={quantity}
        unitPrice={10.00}
        imageSrc='images/thumbnails/cap.png'
        onChangeQuantity={handleChange}
        onDecreaseQuantity={handleDecrease}
        onIncreaseQuantity={handleIncrease}
      />
    </TableGrid>
  )
}

export default ProductList
