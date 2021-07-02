import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Layout from "./pages/Layout";
import AppProvider from "./providers/AppProvider";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Layout>
					<Routes />
				</Layout>
			</AppProvider>

		</BrowserRouter>
	);
};

export default App;
