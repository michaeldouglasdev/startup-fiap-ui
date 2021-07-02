import React from "react";
import HeaderPage from "../HeaderPage";
import { Container } from "./styled";

interface ContainerProps {
	titlePage: string;
	description?: string;
	tradicionalHeader?: boolean;
}

const Root: React.FC<ContainerProps> = ({
	children,
	titlePage,
	description,
	tradicionalHeader,
}) => {
	return (
		<>
			{!tradicionalHeader && <HeaderPage title={titlePage} description={description}></HeaderPage>}
			<Container>{children}</Container>
		</>
	);
};

export default Root;
