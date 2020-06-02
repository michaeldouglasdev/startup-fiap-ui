import React from "react";
import HeaderPage from "../HeaderPage";
import { Container } from "./styled";

interface ContainerProps {
	titlePage: string;
	tradicionalHeader?: boolean;
}

const Root: React.FC<ContainerProps> = ({
	children,
	titlePage,
	tradicionalHeader,
}) => {
	return (
		<>
			{!tradicionalHeader && <HeaderPage title={titlePage}></HeaderPage>}
			<Container>{children}</Container>
		</>
	);
};

export default Root;
