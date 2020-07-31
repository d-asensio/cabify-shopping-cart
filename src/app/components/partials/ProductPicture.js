import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import { getProduct } from '../../selectors'

import {
  FixedAspectRatio
} from '../atoms'

const Picture = styled.img`
  height: 100%;
`

function ProductPicture ({ id }) {
  const {
    name,
    imageSrc
  } = useSelector(
    state => getProduct(state, id)
  )

  return (
    <FixedAspectRatio
      aspectRatio={5 / 6}
    >
      <Picture
        src={imageSrc}
        alt={name}
      />
    </FixedAspectRatio>
  )
}

ProductPicture.propTypes = {
  id: PropTypes.string
}

export default ProductPicture
