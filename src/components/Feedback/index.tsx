import React from "react";
import { Container, FeedbackText } from "./styled";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "antd";

interface FeedbackProps {
	progressValue: number;
	value: number;
	description: string;
	color?: string;
}
const Feedback: React.FC<FeedbackProps> = ({
	progressValue,
	value,
	description,
	color,
}) => {
	return (
		<Container>
			<Progress
				percent={value}
				successPercent={progressValue}
				type="circle"
				format={(percent) => percent}
				strokeColor={color}
			/>

			<FeedbackText>{description}</FeedbackText>
		</Container>
	);
};

export default Feedback;
