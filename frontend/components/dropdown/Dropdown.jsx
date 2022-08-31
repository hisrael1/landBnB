import React from 'react';

const Dropdown = ({session, openModal, logout}) => {

    if (!session.id) {
        return (
            <div className="menu-dropdown"> 
                <div className="session-dropdown-option" onClick={() => openModal("login")}>Login</div>
                <div className="session-dropdown-option" onClick={() => openModal("signup")}>Sign Up</div>
            </div>    
        )
    } else {
        return (
            <div className="menu-dropdown"> 
                <div className="session-dropdown-option" onClick={() => logout()}>Logout</div>
            </div>    
        )
    }
}

export default Dropdown;
