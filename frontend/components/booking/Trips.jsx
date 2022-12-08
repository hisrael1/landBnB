import React from 'react';
import Header from '../splash/Header';
import TripsItem from './TripsItem';
import Footer from "../splash/Footer";

class Trips extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getListings();
        this.props.getBookings();
    }

    render() {
        
        this.props.bookings.reverse();
        return (
            <div>
                <Header />
                <div id="trips-outer-container">
                    <div id="trips-container">
                        <div id="trips-headline">Trips</div>

                        <div className="upcoming-trips">Upcoming Reservations</div>

                        {this.props.bookings.map(
                            booking => {
                                if (Date.parse(booking.check_in_date) > Date.parse(new Date)) {
                                    return <TripsItem booking={booking} listing={this.props.listings[booking.listing_id]}/>
                                }
                            }
                        )}

                        <div className="upcoming-trips">Past Bookings</div>
                        {this.props.bookings.map(
                            booking => {
                                if (Date.parse(booking.check_in_date) <= Date.parse(new Date)) {
                                    return <TripsItem booking={booking} listing={this.props.listings[booking.listing_id]}/>
                                }
                            }
                        )}

                    </div>
                </div>
                <Footer />
                
            </div>
        )
    }
}

export default Trips;
