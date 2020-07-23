import React from 'react'
import styled from 'styled-components'

import { ensureInteger } from '../utils'

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
  const handleInputChange = e =>
    onChange(e.target.value)

  /**
   * This handler is a defense against a bug on <input type="number" />, it turns out that when writing negative numbers
   * and capturing the value through `e.target.value` the `-` symbol is represented as an empty string when there are no
   * more digits after it. This can be problematic since the user could potentially leave that character there alone
   * and thus the input value will become an empty string, which is not of type `number` and would lead to unexpected
   * behaviors such as trying to sum a number to it and getting a string back (`'' + 1 = '1'`).
   *
   * Enforcing an integer when the blur event is triggered is the cleanest, safest, and easiest way to bypass this issue
   * since the component could continue being unopinionated, as it does not implement any increment/decrement logic,
   * which is yielded to the consumer, but also enforces a solid contract.
   */
  const handleInputBlur = e =>
    onChange(
      ensureInteger(e.target.value)
    )

  return (
    <Wrapper>
      <CountButton
        onClick={onDecrease}
      >
        -
      </CountButton>
      <InputNumber
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <CountButton
        onClick={onIncrease}
      >
        +
      </CountButton>
    </Wrapper>
  )
}

Stepper.defaultProps = {
  onChange: () => {},
  onDecrease: () => {},
  onIncrease: () => {}
}

export default Stepper
