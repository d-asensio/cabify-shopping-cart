import React from 'react'
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

function ProductList () {
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
        id='TSHIRT'
        name='Shirt'
        code='X7R2OPX'
        unitPrice={20.00}
        imageSrc='images/thumbnails/shirt.png'
      />
      <ProductLine
        id='MUG'
        name='Mug'
        code='X7R2OPZ'
        unitPrice={5.00}
        imageSrc='images/thumbnails/mug.png'
      />
      <ProductLine
        id='CAP'
        name='Cap'
        code='X7R2OPY'
        unitPrice={10.00}
        imageSrc='images/thumbnails/cap.png'
      />
    </TableGrid>
  )
}

export default ProductList
