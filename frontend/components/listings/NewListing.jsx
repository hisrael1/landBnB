import React from 'react';
import Header from "../splash/Header";
import UserIdentity from '../user/UserIdentity';
import NewListingForm from './NewListingForm';


const NewListing = ({user}) => {
    return (
        <div>
            <Header className="user-header"/>

            <div className="identity-and-new-form-container">
                <UserIdentity user={user} />

                <NewListingForm user={user}/>                
            </div>
        </div>
    )
}

export default NewListing;
