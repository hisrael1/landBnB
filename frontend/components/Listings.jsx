import React from "react";
import Header from "./Header";
import ListingsItem from "./ListingsItem";

const Listings = props => {

    let listingsNames = [
        "Listing", "Listing", "Listing", "Listing", "Listing", "Listing", "Listing", "Listing"
    ];

    return (
        <div>

            <Header />

            <div className="listings-and-map-container">
                <div className="listings-index-container">
                    {listingsNames.map((
                        name => <ListingsItem listingsNames={name}/>
                    ))}
                </div>

                <div>
                    <div className="map-api">
                        Map API Placeholder
                    </div>
                </div>
    
            </div>

        </div>
    )

};

export default Listings;
