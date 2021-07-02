import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
	transparent?: boolean;
}

export const Container = styled.div<ContainerProps>`
	
	background: ${({ transparent }) => transparent ? 'transparent' : 'white'};
	border: 1px solid #ddd;
	padding: 16px;
	color: #666360;
	border-radius: 10px;
	width: 100%;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
	}

	textarea {
		background: transparent;
		flex: 1;
    border: 0;
    resize: none;

		${({ transparent }) => transparent ?
		css`
				color: white
			`
		:
		css`
				color: #ccc;
			`
	}

		&::placeholder {
			${({ transparent }) => transparent ?
		css`
					color: white
				`
		:
		css`
					color: #666;
				`
	}
		}
	}

	svg {
		margin-right: 16px;
    align-self: baseline;
    margin-top: 2px;
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

			textarea {
				color: #16a0bf;

				&::placeholder {
					color: #16a0bf;
				}
			}
		`}

	${(props) =>
		props.isFilled &&
		css`
			color: #16a0bf;

			textarea {
				color: #16a0bf;
				
				svg {
					color: #16a0bf
				}
			} 
			
		`}
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
