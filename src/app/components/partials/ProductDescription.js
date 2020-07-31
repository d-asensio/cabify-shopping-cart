import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../reducers'
import { getProduct } from '../../selectors'

import { Button } from '../atoms'

import ProductInfo from './ProductInfo'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 32px;
`

function ProductDescription ({ id }) {
  const dispatch = useDispatch()

  const {
    name,
    code,
    price,
    description
  } = useSelector(
    state => getProduct(state, id)
  )

  const handleButtonClick = () => {
    dispatch(
      actions.increaseProductCounter({
        id
      })
    )

    dispatch(
      actions.closeProductInfo()
    )
  }

  return (
    <Wrapper>
      <ProductInfo
        name={name}
        price={price}
        code={code}
        description={description}
      />
      <Button onClick={handleButtonClick}>
        Add to cart
      </Button>
    </Wrapper>
  )
}

ProductDescription.propTypes = {
  id: PropTypes.string
}

export default ProductDescription
