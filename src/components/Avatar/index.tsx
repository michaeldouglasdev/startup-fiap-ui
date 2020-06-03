import React from "react";
import { Avatar as UserAvatar } from "./styles";

interface AvatarProps {
	src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
	return <UserAvatar src={src}></UserAvatar>;
};

export default Avatar;
