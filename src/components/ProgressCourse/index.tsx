import React from "react";
import { Container, CourseName } from "./styles";
import { Progress } from "antd";
import AssetImage from "../AssetImage";
import { VBox, HSeparator } from "../Position/styled";

interface ProgressCourseProps {
	name: string;
	percent: number;
	src: string;
	rounded?: boolean;
}
const ProgressCourse: React.FC<ProgressCourseProps> = ({
	name,
	percent,
	src,
	rounded,
}) => {
	return (
		<Container>
			<AssetImage src={src} width="100px" rounded={rounded} />
			<HSeparator />
			<VBox alignSelf="center">
				<CourseName>{name}</CourseName>
				<Progress percent={percent} />
			</VBox>
		</Container>
	);
};

export default ProgressCourse;
