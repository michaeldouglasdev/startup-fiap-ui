import React from "react";
import { Container, ButtonProps } from "./styles";

//type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;