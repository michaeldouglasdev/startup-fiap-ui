import React from "react";
import { Container, Title, Subtitle } from "./styles";

interface HeaderPageProps {
	title: string;
	description?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ title, description }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{description}</Subtitle>
		</Container>
	);
};

export default HeaderPage;
