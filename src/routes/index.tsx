import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import HomeRecruiter from "../pages/HomeRecruiter";

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/recruiter" exact component={HomeRecruiter} />
	</Switch>
);

export default Routes;
