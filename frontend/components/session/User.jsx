import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const User = ({user}) => {
    return (
        <div>
            <div className="user-header"> <Header /> </div>

            <div className="user-show-container">
                <div className="user-identity">
                    <img src={window.blank_user_profile} id="blank_user_profile" />
                    <p className="hello-user"> Hello, {user.first_name} {user.last_name} </p>

                    <div>
                        <img src={window.shield_checkmark} className="shield-checkmark" />
                        <p className="user-verified"> Identity Verified </p>
                    </div>

                    <div className="user-identity-border"></div>

                    <div>
                        <p className="user-confirmed"> User confirmed </p> 
                        <p className="checkmark">&#10004; Identity</p>
                        <p className="checkmark">&#10004; Email Address</p>
                    </div>
                </div>                
                
                <div className="user-info-container">
                    <p id="user-info-hi"> Hi, I'm {user.first_name} {user.last_name} </p>
                    <p id="user-info-about"> About </p>
                    <div className="user-info-border"></div>
                    <p id="user-listings-header">&#9830; 2 Listings </p>
                    {/* Clicking this should render all the users listings */}
                    <div className="user-info-border"></div>
                    <p id="user-listings-header">&#9733; 3 Reviews </p>
                    {/* Clicking this should render all the users reviews */}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default User;
