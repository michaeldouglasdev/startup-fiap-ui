import styled from "styled-components";

interface AvatarProps {
	src: string;
}
export const Avatar = styled.div<AvatarProps>`
	height: 64px;
	width: 64px;
	background: url(${({ src }) => src}) no-repeat center;
	background-size: cover;
	border-radius: 50%;
`;
