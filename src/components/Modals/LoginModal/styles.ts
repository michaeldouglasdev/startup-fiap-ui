import { Form } from '@unform/web'
import styled from 'styled-components'

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LinkSignUp = styled.span`

  &:hover {
    text-decoration: underline;
    color: #16a0bf;
  }
`