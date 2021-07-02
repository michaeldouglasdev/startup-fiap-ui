import styled from "styled-components";

interface ContainerProps {
	rounded?: boolean;
	src: string;
	width?: string;
}
export const Container = styled.img.attrs<ContainerProps>(({ src }) => ({
	src: src,
})) <ContainerProps>`
	border-radius: ${({ rounded }) => (rounded ? "50%" : "0")};
	height: ${({ width }) => (width ? "100%" : "64px")};
	width: ${({ width }) => (width ? width : "64px")};
`;
