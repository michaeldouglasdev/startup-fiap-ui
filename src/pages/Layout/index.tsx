import React from "react";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header></Header>
			<Sidebar></Sidebar>
			<Container>{children}</Container>
			<Footer></Footer>
			<GlobalStyle />
		</>
	);
};

export default Layout;
