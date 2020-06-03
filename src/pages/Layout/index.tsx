import React, { useState } from "react";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
	console.log("location", window.location);

	const [isRecruiter, setIsRecruiter] = useState(
		window.location.pathname.includes("recruiter")
	);

	return (
		<>
			<Header></Header>
			<Sidebar isRecruiter={isRecruiter}></Sidebar>
			<Container>{children}</Container>
			<Footer></Footer>
			<GlobalStyle />
		</>
	);
};

export default Layout;
