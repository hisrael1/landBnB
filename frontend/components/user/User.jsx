import React from "react";
import Header from "../splash/Header";
import Footer from "../splash/Footer";
import UserIdentity from "./UserIdentity";
import UserInfo from './UserInfo';

const User = (props) => {

    const { user, history } = props;

    return (
        <div>
            <div className="user-header"> <Header /> </div>
            <div className="user-show-container">
                <UserIdentity user={user}/>    
                <UserInfo user={user} history={history}/>
            </div>
            <Footer />
        </div>
    )
}

export default User;
