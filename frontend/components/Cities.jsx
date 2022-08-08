import React from 'react';

const Cities = () => {

    return (

        <div>
            <p id="inspiration">
                Inspiration for your next trip
            </p>

            <div id="white-space-below-inspiration"></div>


            <div id="city-container" class="cities">
                <div id='montauk' class="city">
                    <img src={window.montauk} id="montauk"/>
                    <p class="cty-text">Montauk</p>
                </div>
                <div id='lakegeorge' class="city">
                    <img src={window.lakegeorge} id="lakegeorge"/>
                    <p class="cty-text">Lake George</p>
                </div>
                <div id='newport' class="city">
                    <img src={window.newport} id="newport"/>
                    <p class="cty-text">Newport</p>
                </div>
                <div id='scranton' class="city">
                    <img src={window.scranton} id="scranton"/>
                    <p class="cty-text">
                        Scranton
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cities;
