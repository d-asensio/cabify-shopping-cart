import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useControlledInputNumber from 'use-controlled-input-number'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const CountButton = styled.button.attrs(() => ({
  role: 'button'
}))`
    font-size: 20px;
    font-weight: 700;

    padding: 0 8px;
    
    border: none;
    outline: none;

    background: transparent;
    
    color: #7350ff;

    cursor: pointer;
`

const InputNumber = styled.input.attrs({
  type: 'number'
})`
  font-size: 14px;

  width: 40px;
  height: 40px;

  padding: 1px 2px;

  border: 2px solid #dbdbe0;
  outline: none;

  border-radius: 4px;

  text-align: center;

  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

function Stepper ({ className, value, onChange, onDecrease, onIncrease, ...rest }) {
  const inputProps = useControlledInputNumber({ value, onChange })

  return (
    <Wrapper
      className={className}
    >
      <CountButton
        onClick={onDecrease}
      >
        -
      </CountButton>
      <InputNumber {...rest} {...inputProps} />
      <CountButton
        onClick={onIncrease}
      >
        +
      </CountButton>
    </Wrapper>
  )
}

Stepper.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func
}

export default Stepper
