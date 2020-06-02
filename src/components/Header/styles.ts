import styled from "styled-components";

export const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	height: 75px;
	background: #025891;
	background: linear-gradient(to right, #16a0bf, #025891);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
	z-index: 1;
`;

export const HeaderIconGroup = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	color: white;
	padding: 0 16px;
	& svg {
		height: 24px;
		width: 24px;
		margin: 16px;
	}
`;
