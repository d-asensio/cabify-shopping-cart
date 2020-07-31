import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ButtonIcon from './ButtonIcon'

const Wrapper = styled.div`
  overflow: scroll;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: calc(100% - 64px);
  height: calc(100% - 64px);

  max-width: 1088px;
  max-height: 648px;

  background-color: #fff;

  border-radius: 4px;
`

const CloseButton = styled(ButtonIcon).attrs(() => ({
  glyph: 'cross'
}))`
  position: absolute;
  top: 32px;
  right: 32px;

  z-index: 1;
`

function Modal ({ closable, children, onCloseClick }) {
  return (
    <Wrapper>
      {closable && <CloseButton onClick={onCloseClick} />}
      {children}
    </Wrapper>
  )
}

Modal.propTypes = {
  closable: PropTypes.bool,
  onCloseClick: PropTypes.func
}

export default Modal
