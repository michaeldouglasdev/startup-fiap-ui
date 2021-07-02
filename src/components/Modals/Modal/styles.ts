import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    background: black;
    opacity: 0.9;
    z-index: -1;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  max-width: 500px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;

  svg {
    cursor: pointer;
  }
`

export const HeaderTitle = styled.span`
  font-size: 20px;
  color: #565656;
`

export const Body = styled.div`
  padding: 16px 24px;
`