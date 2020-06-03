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
`;

export const HeaderIcon = styled.i`
	cursor: pointer;
	margin: 0 16px;
	height: 24px;
	width: 24px;
	position: relative;
	& svg {
		height: 100%;
		width: 100%;
	}

	&:hover {
		&::after {
			box-shadow: 0 0 4px inset rgba(0, 0, 0, 0.2);
		}
	}

	&::after {
		content: "";
		top: -4px;
		left: -5px;
		border-radius: 4px;
		position: absolute;
		height: 32px;
		width: 34px;
		pointer-events: none;
		z-index: -1;
	}
`;
