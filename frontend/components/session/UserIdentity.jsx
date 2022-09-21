import React from 'react';

const UserIdentity = (props) => {
    
    const { user } = props;
    
    return (
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
    )
}

export default UserIdentity;



