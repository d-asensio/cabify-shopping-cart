import { css } from 'styled-components'

export default css`
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  input,
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
