import React from "react";
import LoginFormContainer from "./session/LoginFormContainer";
import SignupFormContainer from "./session/SignupFormContainer";
import { Redirect, Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Splash from "./Splash";
import ListingsContainer from "./listings/listings_container";
import UserContainer from "./session/UserContainer";
// import NewListing from "./listings/NewListing";
import NewListingContainer from "./listings/NewListingContainer";

const App = () => (
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path = "/listings" component={ListingsContainer}/>
        <Route path = "/users/show/" component={UserContainer}/>
        <Route path = "/listing/new/" component={NewListingContainer}/>
        <Route path = "/" component={Splash} />
    </Switch>
);

export default App;
