import styled, { css } from "styled-components";

interface HBoxProps {
	justifyContent?:
		| "center"
		| `space-between`
		| "space-evenly"
		| "space-around"
		| "flex-start";

	alignItems?: "center" | "flex-start";
	width?: string;
	alignSelf?: "center";
}
export const HBox = styled.div<HBoxProps>`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "stretch"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "stretch")};

	height: 100%;
	width: ${({ width }) => (width ? width : "unset")};
`;

export const HSeparator = styled.div`
	padding: 0 10px;
`;

export const VSeparator = styled.div`
	padding: 10px 0;
`;

export const VBox = styled.div<HBoxProps>`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "stretch"};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : "stretch")};

	height: 100%;
	${({ width }) =>
		width &&
		css`
			width: width;
		`}

	${({ alignSelf }) =>
		alignSelf &&
		css`
			align-self: ${alignSelf};
		`}

		${({ width }) =>
			width &&
			css`
				width: ${width};
			`}
`;
