import React from "react";
import Header from "../Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import { render } from "react-dom";

class Listings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.indexListings();
    }

    render() {

        let listingsNames = [
            "Spacious Rooftop Apartment in the East Village", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle", "ListingTitle"
        ];

        let listings = Object.keys(this.props.listings).map((key) => [Number(key), this.props.listings[key]]);

        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="listings-and-map-container">
                    <div className="listings-index-container">
                        {listings.map((
                            listing => <ListingsItem key={listing[0]} listing={listing[1]}/>
                        ))}
                    </div>

                    <div>
                        <div className="map-api">
                        </div>
                    </div>
        
                </div>

            </div>
        )
    }
};

export default Listings;
