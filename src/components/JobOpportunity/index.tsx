import React from "react";
import {
	Container,
	Title,
	Description,
	PotencialCandidate,
	PotencialCandidateText,
} from "./styles";
import { VBox, HBox, VSeparator } from "../Position/styled";
import { Tag } from "antd";

export interface TagProps {
	color?: string;
	text: string;
}
interface JobOpportunityProps {
	title: string;
	description: string;
	tags?: TagProps[];
	potentialCandidates?: string[];
}
const JobOpportunity: React.FC<JobOpportunityProps> = ({
	title,
	description,
	tags,
	potentialCandidates,
}) => {
	return (
		<Container>
			<VBox>
				<HBox justifyContent="space-between">
					<Title>{title}</Title>
					{tags && (
						<HBox alignSelf="center">
							{tags.map((tag) => (
								<Tag color={tag.color}>{tag.text}</Tag>
							))}
						</HBox>
					)}
				</HBox>
				<Description>{description}</Description>
				{potentialCandidates && (
					<>
						<VSeparator />
						<HBox justifyContent="flex-end">
							<HBox flexDirection="row-reverse" width="100%">
								{potentialCandidates.map((candidate, index) => (
									<PotencialCandidate src={candidate} index={index} />
								))}
								<PotencialCandidateText>
									Candidatos recomendados:
								</PotencialCandidateText>
							</HBox>
						</HBox>
					</>
				)}
			</VBox>
		</Container>
	);
};

export default JobOpportunity;
