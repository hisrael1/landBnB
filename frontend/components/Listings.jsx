import React from "react";
import Header from "./Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "./modal/ModalContainer";

const Listings = props => {

    let listingsNames = [
        "Spacious Rooftop Apartment in the East Village", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle"
    ];

    return (
        <div>

            <Header />
            <ModalContainer />
            <div className="listings-and-map-container">
                <div className="listings-index-container">
                    {listingsNames.map((
                        name => <ListingsItem listingsNames={name}/>
                    ))}
                </div>

                <div>
                    <div className="map-api">
                    </div>
                </div>
    
            </div>

        </div>
    )

};

export default Listings;
