import styled from "styled-components";
import AvatarDemo from "../../assets/avatar-demo.png";

export const Avatar = styled.div`
	height: 64px;
	width: 64px;
	background: url(${AvatarDemo}) no-repeat center;
	background-size: cover;
	border-radius: 50%;
`;
