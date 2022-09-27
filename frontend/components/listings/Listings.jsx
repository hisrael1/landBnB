import React from "react";
import Header from "../splash/Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import Footer from "../splash/Footer";
import { render } from "react-dom";

class Listings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.indexListings();
    }

    render() {
        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="listings-and-map-container">
                    <div className="listings-index-container">
                        {this.props.listings.map((
                            listing => <ListingsItem key={listing.id} listing={listing} history={this.props.history}/>
                        ))}
                    </div>

                    <div>
                        <div className="map-api">
                        </div>
                    </div>
        
                </div>

                <Footer />

            </div>
        )
    }
};

export default Listings;
