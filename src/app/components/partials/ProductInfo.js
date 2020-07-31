import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading } from '../atoms'

const Wrapper = styled.div`
  margin-bottom: 32px;
`

const NameAndPrice = styled(Heading)`
  display: flex;
  justify-content: space-between;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;

  padding-bottom: 32px;
  margin-bottom: 8px;
  
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);

  color: #212240;
`

const CodeCaption = styled.span`
  font-size: 12px;
  font-weight: 400;

  line-height: 16px;
  letter-spacing: 0.13px;

  color: #a6a7b3;
`

function ProductInfo ({ name, price, code, description }) {
  return (
    <Wrapper>
      <NameAndPrice>
        <span>{name}</span>
        <span>{price} €</span>
      </NameAndPrice>
      <Description>
        {description}
      </Description>
      <CodeCaption>
        Product code {code}
      </CodeCaption>
    </Wrapper>
  )
}

ProductInfo.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  code: PropTypes.string,
  description: PropTypes.string
}

export default ProductInfo
