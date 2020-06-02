import styled from "styled-components";
import BackgroundProfile from "../../assets/background-profile.jpg";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.aside`
	position: fixed;
	top: 75px;
	height: calc(100vh - 75px);
	width: 260px;
	background: white;
	border-right: 1px solid #ddd;
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
	z-index: 3;
`;

export const ProfileWrapper = styled.div`
	position: relative;
	padding: 20px;
	border-bottom: 1px solid #ddd;
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.4;
		background: url(${BackgroundProfile});
		z-index: -1;
	}
`;

export const ProfileAvatarWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const ProfileDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProfileName = styled.span`
	font-weight: 500;
`;

export const ProfileRole = styled.span``;

export const MenuBar = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const MenuBarItem = styled.li`
	padding: 12px 24px;
	color: #666;
	border-bottom: 1px solid #ddd;
	transition: background 0.4s;
	&:hover {
		background: #16a0bf;
		color: white;
	}
`;

export const MenuBarItemLink = styled(Link)`
	display: flex;
	align-items: center;
	color: inherit;
	text-decoration: none;

	& > svg {
		height: 24px;
		margin-right: 8px;
	}

	&:hover {
		color: inherit;
	}
`;
