import React from 'react';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
    
    return (
        <div id="header">
            <p id='app-name-header'>
                <img className="airbnb-icon" src={window.airbnb_icon} />
                Landbnb
            </p>

            <Search history={history}/>
            <Menu />
        </div>
    )
}

export default Header;
