import React from 'react';
import Menu from './Menu';
import Search from './Search';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <div id="header">
            <div id='app-name-header' onClick={() => props.history.push("/")}>
                <img className="airbnb-icon" src={window.airbnb_icon}/>
                Landbnb
            </div>

            <Search history={history}/>
            <Menu history={history}/>
        </div>
    )
}

export default withRouter(Header);
