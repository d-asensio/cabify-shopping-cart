import React from 'react'
import styled from 'styled-components'

import { Thumbnail } from './components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  border-radius: 4px;
`

function App () {
  return (
    <Wrapper>
      <Thumbnail
        src='images/thumbnails/cap.png'
        alt='Cap'
      />
      <Thumbnail
        src='images/thumbnails/mug.png'
        alt='Mug'
      />
      <Thumbnail
        src='images/thumbnails/shirt.png'
        alt='Shirt'
      />
    </Wrapper>
  )
}

export default App
