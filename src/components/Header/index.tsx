import React from "react";
import { MdEmail, MdNotifications, MdFavorite } from "react-icons/md";
import { FaCog } from "react-icons/fa";

import AssetImage from "../AssetImage";
import VagaCertaLogo from "../../assets/vaga-certa-logo.png";
import ToggleMenu from "../ToggleMenu";
import { HBox } from "../Position/styled";
import { HeaderWrapper, HeaderIconGroup, HeaderIcon } from "./styles";

const Header: React.FC = () => {

	return (
		<HeaderWrapper>
			<HBox justifyContent="space-between">
				<HBox width="260px" justifyContent="space-between">
					<AssetImage src={VagaCertaLogo} width="150px"></AssetImage>
					<ToggleMenu />
				</HBox>

				<HeaderIconGroup>
					<HBox alignItems="center">
						<HeaderIcon>
							<MdEmail />
						</HeaderIcon>

						<HeaderIcon>
							<MdFavorite />
						</HeaderIcon>

						<HeaderIcon>
							<MdNotifications />
						</HeaderIcon>

						<HeaderIcon>
							<FaCog />
						</HeaderIcon>
					</HBox>
				</HeaderIconGroup>
			</HBox>
		</HeaderWrapper>
	);
};

export default Header;
