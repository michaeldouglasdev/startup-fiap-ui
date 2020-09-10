import React from "react";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineMail,
	AiOutlinePoweroff,
} from "react-icons/ai";
import { FaRegBuilding, FaGraduationCap } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
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

import AvatarRecruiter from "../../assets/avatar-recruiter-demo.png";
import AvatarDemo from "../../assets/avatar-demo.png";

interface SidebarProps {
	isRecruiter?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isRecruiter }) => {
	return (
		<>
			{!isRecruiter ? (
				<SidebarWrapper>
					<ProfileWrapper>
						<ProfileAvatarWrapper>
							<Avatar src={AvatarDemo}></Avatar>
						</ProfileAvatarWrapper>
						<ProfileDescription>
							<ProfileName>André Gonçalves</ProfileName>
							<ProfileRole>Desenvolvedor React Native</ProfileRole>
						</ProfileDescription>
					</ProfileWrapper>
					<MenuBar>
						<MenuBarItem>
							<MenuBarItemLink to="/candidate">
								<AiOutlineHome />
								Home
							</MenuBarItemLink>
						</MenuBarItem>

						<MenuBarItem>
							<MenuBarItemLink to="/candidate">
								<FaRegBuilding />
								Empresas
							</MenuBarItemLink>
						</MenuBarItem>

						<MenuBarItem>
							<MenuBarItemLink to="/candidate/jobs">
								<FaGraduationCap />
								Vagas
							</MenuBarItemLink>
						</MenuBarItem>

						<MenuBarItem>
							<MenuBarItemLink to="/candidate">
								<IoMdPaper />
								Exames
							</MenuBarItemLink>
						</MenuBarItem>

						<MenuBarItem>
							<MenuBarItemLink to="/candidate">
								<AiOutlineMail />
								Mensagens
							</MenuBarItemLink>
						</MenuBarItem>

						<MenuBarItem>
							<MenuBarItemLink to="/candidate">
								<AiOutlinePoweroff />
								Sair
							</MenuBarItemLink>
						</MenuBarItem>
					</MenuBar>
				</SidebarWrapper>
			) : (
					<SidebarWrapper>
						<ProfileWrapper>
							<ProfileAvatarWrapper>
								<Avatar src={AvatarRecruiter}></Avatar>
							</ProfileAvatarWrapper>
							<ProfileDescription>
								<ProfileName>Juliana Medeiros</ProfileName>
								<ProfileRole>Analista de R&S Sênior</ProfileRole>
							</ProfileDescription>
						</ProfileWrapper>
						<MenuBar>
							<MenuBarItem>
								<MenuBarItemLink to="/recruiter">
									<AiOutlineHome />
								Home
							</MenuBarItemLink>
							</MenuBarItem>

							<MenuBarItem>
								<MenuBarItemLink to="/recruiter/jobs">
									<FaRegBuilding />
								Vagas
							</MenuBarItemLink>
							</MenuBarItem>

							<MenuBarItem>
								<MenuBarItemLink to="/recruiter">
									<AiOutlineUser />
								Candidatos
							</MenuBarItemLink>
							</MenuBarItem>

							<MenuBarItem>
								<MenuBarItemLink to="/recruiter">
									<IoMdPaper />
								Exames
							</MenuBarItemLink>
							</MenuBarItem>

							<MenuBarItem>
								<MenuBarItemLink to="/recruiter">
									<AiOutlineMail />
								Mensagens
							</MenuBarItemLink>
							</MenuBarItem>

							<MenuBarItem>
								<MenuBarItemLink to="/recruiter">
									<AiOutlinePoweroff />
								Sair
							</MenuBarItemLink>
							</MenuBarItem>
						</MenuBar>
					</SidebarWrapper>
				)}
		</>
	);
};

export default Sidebar;
