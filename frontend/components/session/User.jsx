import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NewListing from "../listings/NewListing";
import UserIdentity from "./UserIdentity";

const User = (props) => {

    const { user, history } = props;

    return (
        <div>
            <div className="user-header"> <Header /> </div>

            <div className="user-show-container">

                <UserIdentity user={user}/>
                
                <div className="user-info-container">
                    <p id="user-info-hi"> Hi, I'm {user.first_name} {user.last_name} </p>
                    <p id="user-info-about"> About </p>
                    <div className="user-info-border"></div>
                    <p id="user-listings-header">&#9830; 2 Listings</p>
                    <button id="user-add-listing" onClick={() => history.push('/listing/new')}> Add Listing </button>
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
