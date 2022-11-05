import React from "react";
import Header from "../splash/Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import Footer from "../splash/Footer";
import ListingsMap from "./ListingsMap";


class ListingsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listings: []};
    }

    componentDidMount() {
        this.props.indexListings();
        this.props.getBookings();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            if (this.props.match.params.query) {
                const queryString = require('query-string');
                const parsed = queryString.parse(this.props.match.params.query);
                let listings = [...this.props.listings];
                listings = listings.filter(
                    listing => listing.city.includes(parsed.city)).filter(
                        listing => listing.max_num_guests >= parsed.max_num_guests
                    );

                if (listings.length > 0) {
                    debugger
                }
                // let bookedListings = [];
                // if (listings) {
                //     debugger
                //     listings.forEach(listing => {
                //         debugger
                //         this.props.bookings.forEach(booking => {
                //             debugger
                //             let bookingValid = true;
                //             if (listing.check_in_date >= booking.check_in_date && listing.check_in_date < booking.check_out_date) {
                //                 bookingValid = false;
                //             } else if (listing.check_out_date > booking.check_in_date && listing.check_out_date <= booking.check_out_date) {
                //                 bookingValid = false;
                //             } else if (listing.check_in_date <= booking.check_in_date && listing.check_out_date >= booking.check_out_date) {
                //                 bookingValid = false;
                //             }
                //             if (bookingValid = true) {
                //                 bookedListings.push(listing)
                //             }
                //         })
                //     })
                // }

                // debugger


                console.log(parsed.check_in_date)
                console.log(parsed.check_out_date)

                this.setState({listings: listings});
            } else {
                const listings = [...this.props.listings];
                this.setState({listings: listings});
            }
        }
    }

    render() {
        // if (this.props.bookings) {
        //     debugger
        // }
        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="listings-and-map-container">
                    <div className="listings-index-container">
                        {this.state.listings ? this.state.listings.map((
                            listing => <ListingsItem key={listing.id} listing={listing} history={this.props.history}/>
                        )) : null}
                    </div>

                    <div id="sticky-map">
                        <ListingsMap listings={Object.values(this.state.listings)}/>
                    </div>
                    
                    
        
                </div>

                <Footer />

            </div>
        )
    }
};

export default ListingsIndex;
