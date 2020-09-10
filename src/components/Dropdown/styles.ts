import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  transparent?: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: white;
  border: 1px solid #ddd;
  padding: 16px;
  color: #666360;
  border-radius: 10px;

  position: relative;
	width: 100%;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
	}

	svg:first-child {
		margin-right: 16px;
	}

	${(props) =>
    props.isErrored &&
    css`
			border-color: #c53030;
		`}

	${(props) =>
    props.isFocused &&
    !props.transparent &&
    css`
			color: #16a0bf;
			border-color: #16a0bf;
		`}

	${(props) =>
    props.isFilled &&
    css`
			color: #16a0bf;	
		`}
`;

export const Label = styled.span`
  flex: 1;
`
export const DropdownOverlay = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  background: white;
  margin-left: -16px;
  padding-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2;
`

export const List = styled.ul`
  padding-top: 0;
  max-height: 200px;
  overflow: auto;
  border-radius: 16px;
`

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 0 10px;
  border-radius: 16px;
  &:first-child {
    margin-top: 5px;
  }
  &:last-child {
    margin-bottom: 5px;
  }
  &:hover {
    background: #16a0bf;
    color: white;
  }
`

export const Error = styled(Tooltip)`
	height: 20px;
	margin-left: 16px;

	svg {
		margin: 0;
	}

	span {
		background: #c53030;
		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`;
