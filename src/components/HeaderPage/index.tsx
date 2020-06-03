import React from "react";
import { Container, Title, Subtitle } from "./styles";

interface HeaderPageProps {
	title: string;
	description?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle></Subtitle>
		</Container>
	);
};

export default HeaderPage;
