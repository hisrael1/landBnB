import React from 'react';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
    
    return (
        <div id="header">
            <p id='app-name-header'>
                Landbnb
            </p>

            <Search />
            <Menu />
        </div>
    )
}

export default Header;
