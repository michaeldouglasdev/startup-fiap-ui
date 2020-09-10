import React, { useState } from "react";
import Header from "../../components/Header";
import GlobalStyle from "../../styles/global";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
	console.log("location", window.location);

	const [isRecruiter] = useState(
		window.location.pathname.includes("recruiter")
	);

	const [isLandingPage] = useState(
		window.location.pathname === "/"
	)

	return (
		<>
			{!isLandingPage ?
				<>
					<Header></Header>
					<Sidebar isRecruiter={isRecruiter}></Sidebar>
					<Container>{children}</Container>
					<Footer></Footer>
				</>
				:

				<>
					{children}
				</>
			}
			<GlobalStyle />
		</>
	);
};

export default Layout;
