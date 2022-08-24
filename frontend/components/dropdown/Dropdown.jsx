import React from 'react';

const Dropdown = ({openModal}) => {

    return (
        <h1 id="dropdown">
            <main class="menu-dropdown"> 
                <br />
                <main>Login</main>
                <br />
                <br />
                <main onClick={() => openModal("testing")}>Sign Up</main>
                <br />
                <br />
                <main>Logout</main>
                <br />
            </main>    
        </h1>
    )
}

export default Dropdown;
