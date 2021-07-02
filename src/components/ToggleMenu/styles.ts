import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	color: white;
	cursor: pointer;
`;

export const IconBar = styled.i`
	height: 3px;
	width: 24px;
	background: white;
	border-radius: 4px;

	& + i {
		margin-top: 4px;
	}
`;
