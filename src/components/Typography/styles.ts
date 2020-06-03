import styled, { css } from "styled-components";

export const TitlePage = styled.h1`
	border-bottom: 1px solid #ddd;
	color: #312e38;
`;

interface ValuePanelProps {
	gradientText?: string;
}
export const ValuePanel = styled.span<ValuePanelProps>`
	font-size: 64px;
	display: block;
	text-align: center;

	${({ gradientText }) =>
		gradientText &&
		css`
			background: ${gradientText};
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		`}
`;
