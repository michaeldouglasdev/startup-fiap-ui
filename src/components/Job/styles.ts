import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  border: 1px #fefefe solid;
  background: white;
  padding: 12px 8px;
  box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.3);
  cursor: pointer;
`

export const Title = styled.h3`
	color: #025891;
`;

export const Description = styled.span`
	display: block;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	text-overflow: ellipsis;
	overflow: hidden;
`;

export const RegisterDate = styled.span`
  margin-left: 2px;
  margin-bottom: 3px;
`;

export const Salary = styled.span`
  font-size: 18px;
  color: #5bcb9d;
`;
