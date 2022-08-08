import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

{/* My next step is to fully replace the css dropdown with the onClick dropdown
is null correct in my conditional rendering???
Then construct modals for sign in, sign up, sign out
then listings component */}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { renderDropdown: false }
    }

    render() {
        return (
            <div class="menu-container" onClick={ () => {this.setState({ renderDropdown: !this.state.renderDropdown }) } }>
                <img src={window.hamburger_icon} id="hamburger-icon"/>
                    {this.state.renderDropdown ?
                        <Dropdown />
                        :
                        null
                    }
            </div>
        )
    }
}

export default Menu;
