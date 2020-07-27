import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { getIsLoadingProducts, getProductList } from '../selectors'
import { actions } from '../reducers'

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      actions.fetchProducts()
    )
  }, [])

  const isLoading = useSelector(
    getIsLoadingProducts
  )

  const productList = useSelector(
    getProductList
  )

  if (isLoading) return null

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
