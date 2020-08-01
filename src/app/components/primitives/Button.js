import styled from 'styled-components'

const Button = styled.button.attrs(() => ({
  role: 'button'
}))`
  font-size: 16px;
  font-weight: bold;

  line-height: 14px;
  
  width: 100%;

  outline: none;
  border: none;

  padding: 16px 24px;

  border-radius: 4px;

  background-color: #7250ff;
  color: #ffffff;

  cursor: pointer;

  transition: background-color 150ms;

  &:hover {
    background-color: #876aff;
  }

  &:active {
    background-color: #5f37ff;
  }
`

export default Button
