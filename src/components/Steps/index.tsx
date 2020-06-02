import React from "react";
import { Container, StepsTitle } from "./styles";
import { Steps as StepsAntD, Steps } from "antd";

export const { Step } = StepsAntD;

interface StepsProps {
	title?: string;
}

const Stepper: React.FC<StepsProps> = ({ title, children }) => {
	return (
		<Container>
			{title && <StepsTitle>{title}</StepsTitle>}
			<Steps>{children}</Steps>
		</Container>
	);
};

export default Stepper;
