import React from "react";
import LoginFormContainer from "./session/LoginFormContainer";
import SignupFormContainer from "./session/SignupFormContainer";
import { Redirect, Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Splash from "./splash/Splash";
import ListingsContainer from "./listings/listings_container";
import UserContainer from "./user/UserContainer";
import NewListingContainer from "./listings/NewListingContainer";
import ShowListingContainer from "./listings/ShowListingContainer";

const App = () => (
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* <Route path = "/listings/:query" component={ListingsContainer}/> */}
        <Route path = "/listings/" component={ListingsContainer}/>
        <Route path = "/users/show/" component={UserContainer}/>
        <Route path = "/listing/new/" exact component={NewListingContainer}/>
        <Route path = "/listing/:id/" component={ShowListingContainer}/>        
        <Route path = "/" component={Splash} />
    </Switch>
);

export default App;
