import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg.attrs(({ glyph }) => ({
  viewBox: '0 0 24 24',
  children: <use xlinkHref={`#ic-${glyph}`} />
}))`
  display: block;

  flex-shrink: 0;

  transition: fill 200ms;

  fill: #A7A7B3;

  width: 24px;
  height: 24px;
`

export default Icon
