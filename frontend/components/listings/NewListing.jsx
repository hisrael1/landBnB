import React from 'react';
import Header from "../Header";
import UserIdentity from '../session/UserIdentity';

const NewListing = ({user}) => {
    return (
        <div>
            <Header className="user-header"/>

            <div className="identity-and-new-form-container">
                <UserIdentity user={user} />

                <div className="new-listing-container">
                    <form className="new-listing-form">
                        <div className="new-listing-add-listing"> Add Listing </div>
                        
                        Title <input className='new-listing-input'/>
                        Description <input className='new-listing-input'/>
                        Address <input className='new-listing-input'/>
                        Price <input className='new-listing-input'/>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default NewListing;
