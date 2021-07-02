import React from "react";
import { Container, Title, Body } from "./styles";

interface PanelProps {
	title: string;
	borderTitle?: boolean;
	colorTitle?: string;
	noShadow?: boolean;
	hasBorder?: boolean;
	style?: React.CSSProperties;
	background?: string;
}
const Panel: React.FC<PanelProps> = ({
	title,
	borderTitle,
	colorTitle,
	noShadow,
	hasBorder,
	children,
	style,
	background,
}) => {
	return (
		<Container
			noShadow={noShadow}
			hasBorder={hasBorder}
			style={style}
			background={background}
		>
			<Title borderTitle={borderTitle} colorTitle={colorTitle}>
				{title}
			</Title>
			<Body>{children}</Body>
		</Container>
	);
};

export default Panel;
