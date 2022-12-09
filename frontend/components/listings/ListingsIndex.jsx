import React from "react";
import Header from "../splash/Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import Footer from "../splash/Footer";
import ListingsMap from "./ListingsMap";


class ListingsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listings: [], fullyLoaded: "no"};
        this.findAvailableListings = this.findAvailableListings.bind(this);
    }

    componentDidMount() {
        this.props.indexListings();
        this.props.getBookings();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            if (this.props.match.params.query) {
                const queryString = require('query-string');
                const parsed = queryString.parse(this.props.match.params.query);
                
                // filter by city and num_guests
                let listings = [...this.props.listings];
                listings = listings.filter(
                    listing => listing.city.includes(parsed.city)).filter(
                        listing => listing.max_num_guests >= parsed.max_num_guests
                    );

                // filter by booking dates
                let availableListings = [];
                if (listings.length > 0 && parsed.check_in_date && parsed.check_out_date) {
                    availableListings = this.findAvailableListings(listings, this.props.bookings, parsed.check_in_date, parsed.check_out_date)
                    
                    listings = listings.filter(
                        listing => availableListings.includes(listing))
                }
                this.setState({listings: listings});
            } else {
                const listings = [...this.props.listings];
                this.setState({listings: listings});
            }
        } else if (this.state.fullyLoaded == "no") {
            this.setState({fullyLoaded: "yes"});
        }
    }

    findAvailableListings(listings, bookings, check_in_date, check_out_date) {
        let availableListings = [];
        listings.forEach(listing => {
            let isAvailable = true;
            const listingBookings = bookings.filter(booking => booking.listing_id == listing.id);
            listingBookings.forEach(booking => {
                if (check_in_date >= booking.check_in_date && check_in_date < booking.check_out_date) {
                    isAvailable = false;
                } else if (check_out_date > booking.check_in_date && check_out_date <= booking.check_out_date) {
                    isAvailable = false;
                } else if (check_in_date <= booking.check_in_date && check_out_date >= booking.check_out_date) {
                    isAvailable = false;
                } 
            })
            if (!!isAvailable) {
                availableListings.push(listing);
            }
        })
        return availableListings
    }

    render() {

        let noListingsFound = null;

        if (this.state.fullyLoaded == "yes" && this.state.listings.length == 0) {
            noListingsFound = 
                <div id="no-listings-found">&#128269; No listings found please try again
                    <p id="all-listings-link" onClick={(e) => this.props.history.push(`/listings/city=&max_num_guests=0&check_in_date=&check_out_date=`)}>
                        Click Here to See Listings in All Cities
                    </p>
                </div> 
        }
    
        return (
            <div>
                <Header />
                <ModalContainer />
                <div id="listings-and-map-outer-container">
                    <div className="listings-and-map-container">
                        <div className="listings-index-container">
                            {this.state.listings ? this.state.listings.map((
                                listing => <ListingsItem key={listing.id} listing={listing} history={this.props.history}/>
                            )) : null }
                        </div>
                        {noListingsFound ? noListingsFound : null}
                    </div>
                    <div id="sticky-map">
                        <ListingsMap listings={Object.values(this.state.listings)} history={this.props.history}/>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
};

export default ListingsIndex;
