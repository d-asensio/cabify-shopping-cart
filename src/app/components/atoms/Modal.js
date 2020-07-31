import styled from 'styled-components'

const Modal = styled.div`
  overflow: scroll;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: calc(100% - 64px);
  height: calc(100% - 64px);

  max-width: 1088px;
  max-height: 648px;

  background-color: #fff;

  border-radius: 4px;
`

export default Modal
