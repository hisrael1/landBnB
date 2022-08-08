import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {

    return (
        <div class="menu-container">
            <img src={window.hamburger_icon} id="hamburger-icon"/>
                <p class="menu-dropdown"> 
                    Menu Options 
                    <br />
                    <li><Link to={'/login'}>Login</Link></li>
                    <br />
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                    <br />
                    <li><Link to={'/logout'}>Logout</Link></li>
                </p>    
        </div>
    )
}

export default Menu;
