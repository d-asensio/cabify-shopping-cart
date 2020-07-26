import React from 'react'
import styled from 'styled-components'

import { useControlledInputNumber } from '../hooks'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const CountButton = styled.button`
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

function Stepper ({ value, onChange, onDecrease, onIncrease }) {
  const inputProps = useControlledInputNumber({ value, onChange })

  return (
    <Wrapper>
      <CountButton
        onClick={onDecrease}
      >
        -
      </CountButton>
      <InputNumber {...inputProps} />
      <CountButton
        onClick={onIncrease}
      >
        +
      </CountButton>
    </Wrapper>
  )
}

export default Stepper
