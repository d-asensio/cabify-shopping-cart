import { createGlobalStyle } from 'styled-components'

import genericStyle from '../generic'

const GlobalStyle = createGlobalStyle`
  ${genericStyle}

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-image: url("images/background.png");
    background-color: #212240;
    background-position: center;
    background-size: cover;
  }
`

export default GlobalStyle
