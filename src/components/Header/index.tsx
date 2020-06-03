import React, { useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { MdEmail, MdNotifications, MdFavorite } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaCog } from "react-icons/fa";

import AssetImage from "../AssetImage";
import VagaCertaLogo from "../../assets/vaga-certa-logo.png";
import ToggleMenu from "../ToggleMenu";
import { HBox } from "../Position/styled";
import Input from "../Input";
import { HeaderWrapper, HeaderIconGroup, HeaderIcon } from "./styles";

const Header: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	return (
		<HeaderWrapper>
			<HBox justifyContent="space-between">
				<HBox width="260px" justifyContent="space-between">
					<AssetImage src={VagaCertaLogo} width="150px"></AssetImage>
					<ToggleMenu />
				</HBox>

				<Form
					onSubmit={() => console.log("onSubmit")}
					ref={formRef}
					style={{ alignSelf: "center" }}
				>
					<Input
						name="search"
						icon={FiSearch}
						placeholder="Search"
						transparent={true}
					/>
				</Form>
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
