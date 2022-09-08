import React from 'react';

const ListingsItem = props => {

    return (
        <div className="listing-item-container"> 
            <img src={window.listing_pic01} className="listing-thumbnail"/>
            <p className="listing-item-info"> {props.listingsNames} </p>
        </div>
    )
}

export default ListingsItem;
