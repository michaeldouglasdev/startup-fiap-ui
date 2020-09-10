import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 36px 24px;
  background: white;
  border: 1px solid #f1f1f1;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const CardAdvantageTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #555;
`;

export const CardAdvantageDescription = styled.span`
  width: 70%;
`

export const CardAdvantagePriceBox = styled.div`
  display: flex;
  font-weight: bold;
  line-height: 1;
`

export const CardAdvantagePriceType = styled.span``

export const CardAdvantagePrice = styled.span`
  display: flex;
  font-size: 48px;
  line-height: 1;

  ${({ children }) => children ?
    css`
      &::before {
        content: 'R$';
        margin-top: 6px;
        font-size: 24px;
        align-self: baseline;
      }
      &::after {
        content: ',00';
        font-size: 48px;
      }
    `
    :
    css`
     &::before {
        content: 'GRÁTIS';
        font-size: 48PX;
        align-self: baseline;
      }
    `
  }
 
`

export const CardAdvantageItens = styled.ul``

export const CardAdvantageItem = styled.li`
  display: flex;
  list-style-type: none;
  
  svg {
    margin-right: 10px;
    align-self: center;
  }
`


export const CardAdvantageSeparator = styled.div`
  width: 100px;
  height: 1px;
  background: #ddd;

  margin: 24px;
`