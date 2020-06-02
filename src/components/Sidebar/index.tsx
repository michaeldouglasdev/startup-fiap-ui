import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBuilding, FaGraduationCap, FaPowerOff } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {
	SidebarWrapper,
	ProfileWrapper,
	ProfileAvatarWrapper,
	ProfileDescription,
	ProfileName,
	ProfileRole,
	MenuBar,
	MenuBarItem,
	MenuBarItemLink,
} from "./styles";
import Avatar from "../Avatar";

const Sidebar: React.FC = () => {
	return (
		<SidebarWrapper>
			<ProfileWrapper>
				<ProfileAvatarWrapper>
					<Avatar></Avatar>
				</ProfileAvatarWrapper>
				<ProfileDescription>
					<ProfileName>André Gonçalves</ProfileName>
					<ProfileRole>Desenvolvedor React Native</ProfileRole>
				</ProfileDescription>
			</ProfileWrapper>
			<MenuBar>
				<MenuBarItem>
					<MenuBarItemLink to="/">
						<AiOutlineHome />
						Home
					</MenuBarItemLink>
				</MenuBarItem>

				<MenuBarItem>
					<MenuBarItemLink to="/">
						<FaRegBuilding />
						Empresas
					</MenuBarItemLink>
				</MenuBarItem>

				<MenuBarItem>
					<MenuBarItemLink to="/">
						<FaGraduationCap />
						Cursos
					</MenuBarItemLink>
				</MenuBarItem>

				<MenuBarItem>
					<MenuBarItemLink to="/">
						<IoMdPaper />
						Exames
					</MenuBarItemLink>
				</MenuBarItem>

				<MenuBarItem>
					<MenuBarItemLink to="/">
						<MdEmail />
						Mensagens
					</MenuBarItemLink>
				</MenuBarItem>

				<MenuBarItem>
					<MenuBarItemLink to="/">
						<FaPowerOff />
						Sair
					</MenuBarItemLink>
				</MenuBarItem>
			</MenuBar>
		</SidebarWrapper>
	);
};

export default Sidebar;
