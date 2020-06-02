import React from "react";
import { Container } from "./styled";

interface AssetImageProps {
	rounded?: boolean;
	src: string;
	width?: string;
}
const AssetImage: React.FC<AssetImageProps> = ({ rounded, src, width }) => {
	return <Container rounded={rounded} src={src} width={width}></Container>;
};

export default AssetImage;
