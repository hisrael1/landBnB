import React from 'react';
import DropdownContainer from './dropdown/DropdownContainer';

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
                        <DropdownContainer />
                        :
                        null
                    }
            </div>
        )
    }
}

export default Menu;
