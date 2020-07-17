import React from 'react'

import normalizeStyle from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalizeStyle}

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  } 
`

function App () {
  return (
    <main>
      <GlobalStyle />
      <h1>Hello carbon-free world</h1>
    </main>
  )
}

export default App
