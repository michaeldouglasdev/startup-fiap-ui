import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import HomeRecruiterPage from "../pages/HomeRecruiter";
import JobsPage from "../pages/Jobs";
import JobsRecruiterPage from "../pages/JobsRecruiter";
import JobPage from "../pages/Job";
import LandingPage from "../pages/LandingPage";

const Routes: React.FC = () => (
	<Switch>
		<Route path="/candidate" exact component={HomePage} />
		<Route path="/candidate/jobs" exact component={JobsPage} />
		<Route path="/candidate/jobs/:id" exact component={JobPage} />
		<Route path="/recruiter" exact component={HomeRecruiterPage} />
		<Route path="/recruiter/jobs" exact component={JobsRecruiterPage} />
		<Route path="/" exact component={LandingPage} />
	</Switch>
);

export default Routes;
