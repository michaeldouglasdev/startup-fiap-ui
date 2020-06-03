import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	border-bottom: 1px solid #eee;
	padding-bottom: 8px;
`;

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

interface PotencialCandidateProps {
	src: string;
	index: number;
}
export const PotencialCandidate = styled.img.attrs<PotencialCandidateProps>(
	({ src }) => ({
		src: src,
	})
)<PotencialCandidateProps>`
	height: 32px;
	width: 32px;
	border-radius: 50%;

	transform: translateX(${({ index }) => index * 16}px);
`;

export const PotencialCandidateText = styled.span`
	font-size: 18px;
	color: #888;
`;
