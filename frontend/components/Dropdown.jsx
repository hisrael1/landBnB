import React from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from './modal/ModalContainer';

const Dropdown = () => {

    return (
        <h1 id="dropdown">
            <main class="menu-dropdown"> 
                Menu Options 
                {/* look up css from airbnb */}
                <br />
                <ModalContainer />
                <main><Link to={'/login'}>Login</Link></main>
                <br />
                <main><Link to={'/signup'}>Sign Up</Link></main>
                <br />
                <main><Link to={'/logout'}>Logout</Link></main>
                <br />

            </main>    
        </h1>
    )
}

export default Dropdown;

