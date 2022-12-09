import React from 'react';
import { withRouter } from 'react-router-dom';

const TripsItem = (props) => {
    const {booking} = props;
    const {listing} = props;

    return (
        <div id="reservation-container" onClick={(e) => props.history.push(`/listing/${listing.id}`)}>
            <div className="reservation-info-container">
                <div id="reservation-city-and-host">
                    <div className="reservation-city">{listing ? listing.city : null}</div>
                    <div className="reservation-host">Entire Listing</div>
                </div>
                <div id="trips-underline"></div>
                <div id="reservation-dates-and-address">
                    <div id="reservation-dates">
                        {booking ? booking.check_in_date : null} - {booking ? booking.check_out_date : null}
                    </div>
                    <div id="reservation-dates-and-address-underline"></div>
                    <div id="reservation-address"> 
                        <p>{listing ? listing.address : null}, </p>
                        <p>{listing ? listing.city : null}, {listing ? listing.state : null}, </p>
                        United States
                    </div>
                    
                </div>
            </div>
            {listing ? <img className="reservation-img-container" src={listing.photoUrls[0]}></img> : null}

        </div>
    )
}

export default withRouter(TripsItem);
