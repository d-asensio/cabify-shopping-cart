import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from './Icon'

const Wrapper = styled.button`
  cursor: pointer;

  padding: 0;

  background: transparent;

  border: none;
  outline: none;

  border-radius: 2px;

  transition: background 200ms;

  &:hover {
    background: rgba(0, 0, 0, 0.1);

    ${Icon} {
      fill: #212240;
    }
  }
`

function ButtonIcon ({ glyph, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Icon glyph={glyph} />
    </Wrapper>
  )
}

ButtonIcon.propTypes = {
  glyph: PropTypes.string
}

export default ButtonIcon
