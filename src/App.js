import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import {
  ProductDetails,
  Stepper
} from './components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  border-radius: 4px;

  > * {
    margin-bottom: 16px;
  }
`

const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue)

  const handleDecrease = useCallback(
    () => setValue(value - 1),
    [value]
  )

  const handleIncrease = useCallback(
    () => setValue(value + 1),
    [value]
  )

  return {
    value,
    handleChange: setValue,
    handleDecrease,
    handleIncrease
  }
}

function App () {
  const {
    value,
    handleChange,
    handleDecrease,
    handleIncrease
  } = useCounter(20)

  return (
    <Wrapper>
      <ProductDetails
        imageSrc='images/thumbnails/shirt.png'
        name='Shirt'
        code='X7R2OPX'
      />
      <ProductDetails
        imageSrc='images/thumbnails/mug.png'
        name='Mug'
        code='X7R2OPZ'
      />
      <ProductDetails
        imageSrc='images/thumbnails/cap.png'
        name='Cap'
        code='X7R2OPY'
      />
      <Stepper
        value={value}
        onChange={handleChange}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
    </Wrapper>
  )
}

export default App
