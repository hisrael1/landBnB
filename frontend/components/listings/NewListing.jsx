import React from 'react';
import Header from "../splash/Header";
import UserIdentity from '../user/UserIdentity';
import NewListingForm from './NewListingForm';


const NewListing = ({user, createNewListing}) => {
    return (
        <div>
            <Header className="user-header"/>

            <div className="identity-and-new-form-container">
                <UserIdentity user={user} />

                <NewListingForm user={user} createNewListing={createNewListing}/>                
            </div>
        </div>
    )
}

export default NewListing;
