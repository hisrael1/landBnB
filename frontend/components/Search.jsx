import React from 'react';
import { Link } from 'react-router-dom'

const Search = () => {
    
    return (
        <p id="search">
            <input type="text" id="left-edge-search"/>
            <input type="date" id="left-mid-search"/>
            <input type="date" id="right-mid-search"/>
            <input type="int" id="right-edge-search"/>
            <Link to="/listings">About</Link>
        </p>
    )
}

export default Search;
