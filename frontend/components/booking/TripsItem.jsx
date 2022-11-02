import React from 'react';

const TripsItem = (props) => {

    return (
        <div id="reservation-container">
            <div class="reservation-info-container">
                <div id="reservation-city-and-host">
                    <div class="reservation-city">Manhattan</div>
                    <div class="reservation-host">Entire Listing Hosted by Harrison</div>
                </div>
                <div id="trips-underline"></div>
                <div id="reservation-dates-and-address">
                    <div id="reservation-dates">
                        Nov 1st - Nov 4th 2022
                    </div>
                    <div id="reservation-dates-and-address-underline"></div>
                    <div id="reservation-address"> 119 Guernsy St, Brooklyn, NY United States</div>
                </div>
            </div>
            <img class="reservation-img-container" src={window.listing_pic01}></img>

        </div>
    )
}

export default TripsItem;
