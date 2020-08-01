import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Thumbnail } from '../primitives'

import CodeCaption from './CodeCaption'

const Wrapper = styled.button.attrs(() => ({
  role: 'button'
}))`
  display: flex;
  align-items: center;

  text-align: left;

  padding: 0;

  outline: none;
  border: none;

  background: #fff;

  cursor: pointer;

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

function ProductDetails ({
  name,
  code,
  thumbnailSrc,
  onClick
}) {
  return (
    <Wrapper
      onClick={onClick}
    >
      <Thumbnail
        src={thumbnailSrc}
        alt={`${name} thumbnail`}
      />
      <Description>
        <Name>{name}</Name>
        <CodeCaption code={code} />
      </Description>
    </Wrapper>
  )
}

ProductDetails.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  thumbnailSrc: PropTypes.string,
  onClick: PropTypes.func
}

export default ProductDetails
