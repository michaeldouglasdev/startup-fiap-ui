import styled from "styled-components";

interface ContainerProps {
	noShadow?: boolean;
	hasBorder?: boolean;
	background?: string;
}
export const Container = styled.div<ContainerProps>`
	background: ${({ background }) => (background ? background : "white")};
	border: ${({ hasBorder }) => (hasBorder ? "1px solid #ddd" : "unset")};
	border-radius: 8px;
	box-shadow: ${({ noShadow }) =>
		!noShadow ? "4px 4px 4px 0px rgba(0, 0, 0, 0.2)" : "unset"};
	flex: 1;
`;

interface TitleProps {
	borderTitle?: boolean;
	colorTitle?: string;
}

export const Title = styled.h2<TitleProps>`
	padding: 16px 16px 4px 16px;
	font-size: 20px;
	color: ${({ colorTitle }) => (colorTitle ? colorTitle : "#555")};
	font-weight: normal;
	border-bottom: ${(props) => (props.borderTitle ? "1px solid #ddd" : "none")};
`;

export const Body = styled.div`
	padding: 16px 20px 20px 20px;
`;
