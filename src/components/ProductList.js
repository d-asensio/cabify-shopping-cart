import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { getProductList } from '../selectors'

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
  const productList = useSelector(
    getProductList
  )

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
      {productList.map(
        (productId, key) =>
          <ProductLine key={key} id={productId} />
      )}
    </TableGrid>
  )
}

export default ProductList
