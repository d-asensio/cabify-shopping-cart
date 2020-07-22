import normalizeStyle from 'styled-normalize'
import { createGlobalStyle, css } from 'styled-components'

const customStyleReset = css`
  ${normalizeStyle}

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  button {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  :root {
    font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyle = createGlobalStyle`
  ${customStyleReset}

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-image: url("../images/background.png");
    background-color: #212240;
    background-position: center;
    background-size: cover;
  }
`

export default GlobalStyle
