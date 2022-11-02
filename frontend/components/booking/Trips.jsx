import React from 'react';
import Header from '../splash/Header';
import TripsItem from './TripsItem';
import Footer from "../splash/Footer";

class Trips extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const reservations = [1, 1, 1];

        return (
            <div>
                <Header />
                <div id="trips-container">
                    <div id="trips-headline">Trips</div>

                    <div class="upcoming-trips">Upcoming Reservations</div>

                    {reservations.map(() => <TripsItem />)}

                    <div class="upcoming-trips">Past Bookings</div>

                    {reservations.map(() => <TripsItem />)}
                </div>

                <Footer />
                
            </div>
        )
    }
}

export default Trips;
