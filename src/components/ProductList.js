import React from 'react'
import styled from 'styled-components'

import TableGrid from './TableGrid'
import ProductLine from './ProductLine'

const ColumnTitle = styled.span`
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
        <ColumnTitle>PRODUCT DETAILS</ColumnTitle>
        <ColumnTitle>QUANTITY</ColumnTitle>
        <ColumnTitle>PRICE</ColumnTitle>
        <ColumnTitle>TOTAL</ColumnTitle>
      </TableGrid.Row>
      <ProductLine id='TSHIRT' />
      <ProductLine id='MUG' />
      <ProductLine id='CAP' />
    </TableGrid>
  )
}

export default ProductList
