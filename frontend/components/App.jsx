import React from "react";
// Import navbar container
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import { Redirect, Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Splash from "./Splash";
import greeting_container from "./greeting/greeting_container";
// New code below
import Listings from "./Listings";

const App = () => (
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/logout" component={greeting_container} />
        {/* New code below */}
        <Route path = "/listings" component={Listings}/>
        <Route path = "/" component={Splash} />
    </Switch>
);

export default App;
