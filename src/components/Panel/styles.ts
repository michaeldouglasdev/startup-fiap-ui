import styled from "styled-components";

interface ContainerProps {
	noShadow?: boolean;
	hasBorder?: boolean;
}
export const Container = styled.div<ContainerProps>`
	background: white;
	border: ${({ hasBorder }) => (hasBorder ? "1px solid #ddd" : "unset")};
	border-radius: 8px;
	box-shadow: ${({ noShadow }) =>
		!noShadow ? "4px 4px 4px 0px rgba(0, 0, 0, 0.2)" : "unset"};
	flex: 1;
`;

interface TitleProps {
	borderTitle?: boolean;
}

export const Title = styled.h2<TitleProps>`
	padding: 16px 16px 4px 16px;
	font-size: 20px;
	color: #555;
	font-weight: normal;
	text-transform: capitalize;
	border-bottom: ${(props) => (props.borderTitle ? "1px solid #ddd" : "none")};
`;

export const Body = styled.div`
	padding: 16px 20px 20px 20px;
`;
