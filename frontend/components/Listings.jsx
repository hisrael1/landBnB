import React from "react";
import Header from "./Header"

const Listings = props => {

    return (
        <div>

            <Header />

            <div className="listings-and-map-container">
                <div className="listings-index-container">
                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>

                    <div className="listing-item-container"> 
                        <img src={window.listing_pic01} className="listing-thumbnail"/>
                        <p className="listing-item-info"> Listing </p>
                    </div>
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
