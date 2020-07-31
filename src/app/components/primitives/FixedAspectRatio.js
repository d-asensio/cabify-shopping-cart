import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  ${({ aspectRatio }) => applyAspectRatio(aspectRatio)}
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`

const applyAspectRatio = aspectRatio => css`
  &::before {
    display: block;
    width: 100%;
    padding-top: ${aspectRatio};
    content: '';
  }
`

function FixedAspectRatio ({ children, aspectRatio }) {
  return (
    <Wrapper
      aspectRatio={aspectRatio}
    >
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

FixedAspectRatio.defaultProps = {
  aspectRatio: 1
}

FixedAspectRatio.propTypes = {
  aspectRatio: PropTypes.number
}

export default FixedAspectRatio
