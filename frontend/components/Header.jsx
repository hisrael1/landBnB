import React from 'react';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
    
    return (
        <div id="header">
            <div id='app-name-header'>
                <img className="airbnb-icon" src={window.airbnb_icon} />
                Landbnb
            </div>

            <Search history={history}/>
            <Menu />
        </div>
    )
}

export default Header;
