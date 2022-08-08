// NEWSFLASH: This is not a modal this is a dropdown

import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {

    return (
        <h1 id="dropdown">
            <main class="menu-dropdown"> 
                Menu Options 
                {/* look up css from airbnb */}
                <br />
                <main><Link to={'/login'}>Login</Link></main>
                <br />
                <main><Link to={'/signup'}>Sign Up</Link></main>
                <br />
                <main><Link to={'/logout'}>Logout</Link></main>
            </main>    
        </h1>
    )
}

export default Dropdown;

