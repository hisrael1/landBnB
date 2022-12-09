import React from 'react';
import { withRouter } from 'react-router';

const Cities = (props) => {

    return (
        <div>
            <p id="inspiration">
                Inspiration for your next trip
            </p>

            <div id="white-space-below-inspiration"></div>


            <div id="city-container" className="cities">
                <div id='montauk' className="city" onClick={() => props.history.push('/listings/city=Montauk&max_num_guests=0&check_in_date=&check_out_date=')}>
                    <img src={window.montauk} id="montauk"/>
                    <p className="cty-text">Montauk</p>
                </div>
                <div id='lakegeorge' className="city" onClick={() => props.history.push('/listings/city=Lake+George&max_num_guests=0&check_in_date=&check_out_date=')}>
                    <img src={window.lakegeorge} id="lakegeorge"/>
                    <p className="cty-text">Lake George</p>
                </div>
                <div id='newport' className="city" onClick={() => props.history.push('/listings/city=Newport&max_num_guests=0&check_in_date=&check_out_date=')}>
                    <img src={window.newport} id="newport"/>
                    <p className="cty-text">Newport</p>
                </div>
                <div id='scranton' className="city" onClick={() => props.history.push('/listings/city=Scranton&max_num_guests=0&check_in_date=&check_out_date=')}>
                    <img src={window.scranton} id="scranton"/>
                    <p className="cty-text"> Scranton </p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Cities);
