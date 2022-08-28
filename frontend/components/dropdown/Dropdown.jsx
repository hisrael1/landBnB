import React from 'react';

const Dropdown = ({openModal, logout}) => {

    return (
        <h1 id="dropdown">
            <main className="menu-dropdown"> 
                <br />
                <main onClick={() => openModal("login")}>Login</main>
                <br />
                <br />
                <main onClick={() => openModal("signup")}>Sign Up</main>
                <br />
                <br />
                <main onClick={() => logout()}>Logout</main>
                <br />
            </main>    
        </h1>
    )
}

export default Dropdown;
