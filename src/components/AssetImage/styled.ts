import styled from "styled-components";

interface ContainerProps {
	rounded?: boolean;
	src: string;
	width?: string;
}
export const Container = styled.div<ContainerProps>`
	border-radius: ${({ rounded }) => (rounded ? "50%" : "0")};
	background: url(${(props) => props.src}) no-repeat center;
	background-size: cover;
	height: ${({ width }) => (width ? "100%" : "64px")};
	width: ${({ width }) => (width ? width : "64px")};
`;
