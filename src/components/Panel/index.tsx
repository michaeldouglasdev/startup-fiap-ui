import React from "react";
import { Container, Title, Body } from "./styles";

interface PanelProps {
	title: string;
	borderTitle?: boolean;
	noShadow?: boolean;
	hasBorder?: boolean;
}
const Panel: React.FC<PanelProps> = ({
	title,
	borderTitle,
	noShadow,
	hasBorder,
	children,
}) => {
	return (
		<Container noShadow={noShadow} hasBorder={hasBorder}>
			<Title borderTitle={borderTitle}>{title}</Title>
			<Body>{children}</Body>
		</Container>
	);
};

export default Panel;
