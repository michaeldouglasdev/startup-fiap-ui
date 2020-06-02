import React from "react";
import { Container, Title } from "./styles";

interface HeaderPageProps {
	title: string;
	description?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};

export default HeaderPage;
