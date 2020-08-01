import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-size: 12px;
  font-weight: 400;

  line-height: 16px;
  letter-spacing: 0.13px;

  color: #a6a7b3;
`

function CodeCaption ({ code }) {
  return (
    <Wrapper>
      Product code {code}
    </Wrapper>
  )
}

CodeCaption.propTypes = {
  code: PropTypes.string
}

export default CodeCaption
