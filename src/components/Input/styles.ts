import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
	transparent?: boolean;
}

export const Container = styled.div<ContainerProps>`
	${({ transparent }) =>
		transparent
			? css`
					background: transparent;
					padding: 0 16px 4px 0;
					color: white;
					border-bottom: 1px solid white;
			  `
			: css`
					background: #025891;
					border: 2px solid #025891;
					padding: 16px;
					color: #666360;
					border-radius: 10px;
			  `}
	width: 100%;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
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
			color: #ff9000;
			border-color: #ff9000;
		`}

	${(props) =>
		props.isFilled &&
		css`
			color: #ff9000;
		`}



	input {
		background: transparent;
		flex: 1;
		border: 0;
		color: white;

		&::placeholder {
			color: white;
		}
	}

	svg {
		margin-right: 16px;
	}
`;

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
