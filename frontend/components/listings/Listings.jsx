import React from "react";
import Header from "../splash/Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import Footer from "../splash/Footer";


class Listings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {listings: props.listings};
    }

    // set up photos on s3

    componentDidMount() {
        this.props.indexListings();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            if (this.props.match.params.query) {
                const queryString = require('query-string');
                const parsed = queryString.parse(this.props.match.params.query);
                const listings = [...this.props.listings];
                this.setState({listings: listings.filter(listing => listing.city.includes(parsed.city))});
            } else {
                const listings = [...this.props.listings];
                this.setState({listings: listings});
            }
        }
    }

    render() {

        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="listings-and-map-container">
                    <div className="listings-index-container">
                        {this.state.listings.map((
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
