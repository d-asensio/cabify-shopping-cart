import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Thumbnail } from '../atoms'

const Wrapper = styled.div`
  display: flex;

  ${Thumbnail} {
    margin-right: 16px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.span`
  font-size: 16px;
  font-weight: 700;

  line-height: 24px;
  letter-spacing: -0.18px;

  color: #7350ff;
`

const CodeCaption = styled.span`
  font-size: 12px;
  font-weight: 400;

  line-height: 16px;
  letter-spacing: 0.13px;

  color: #a6a7b3;
`

function ProductDetails ({
  name,
  code,
  thumbnailSrc
}) {
  return (
    <Wrapper>
      <Thumbnail
        src={thumbnailSrc}
        alt={name}
      />
      <Description>
        <Name>{name}</Name>
        <CodeCaption>Product code {code}</CodeCaption>
      </Description>
    </Wrapper>
  )
}

ProductDetails.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  thumbnailSrc: PropTypes.string
}

export default ProductDetails
