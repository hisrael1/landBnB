import React from 'react';

const ListingsItem = ({listing}) => {
    const {title, num_baths, num_beds, price_per_night} = listing;

    return (
        <div className="listing-item-container"> 
            <img src={window.listing_pic01} className="listing-thumbnail"/>
            <div className="listing-item-info"> 
                <p className="listing-description"> Apartment in New York City </p>
                <p className="listing-title"> {title} </p>
                <div className="listing-capacities"> 
                    {num_beds} Beds <span className="bullet-symbol">&#183; </span> 3 Guests <span className="bullet-symbol">&#183; </span> {num_baths} Baths
                </div>
                
                <div className="ratings-and-price-container">
                    <p className="listing-rating-and-reviews"> <span className="bold">&#9733; 5.0 </span> (4 reviews) </p>
                    <p className="listing-price"> <span className="bold"> ${price_per_night} </span> / per night </p> 
                </div>
            </div>
        </div>
    )
}

export default ListingsItem;
