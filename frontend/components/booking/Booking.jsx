import React from 'react';

class Booking extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='booking-container'>
                <div className='booking-price-and-reviews'>
                    <div className='booking-price-container'>
                        <p className="booking-price">${this.props.listing ? this.props.listing.price_per_night : null} / </p> <span>night</span>
                    </div>
                    <div className="booking-reviews-container">
                        <div>
                            <span>&#9733; 5.0 </span>
                            <span>&#183;</span>
                            <span className='booking-reviews'>reviews</span>
                        </div>
                    </div>
                </div>

                <form className="booking-check-in-out-guest-container">
                    <div className="booking-check-in-out-container">
                        <input className='booking-check-in' type="date">
                        </input>

                        <input className='booking-check-out' type="date">
                        </input>
                    </div>
                    <div className='booking-num-guests-container'>
                        <select className='booking-num-guests'>
                            <option>1 guest</option>
                            <option>2 guests</option>
                            <option>3 guests</option>
                            <option>4 guests</option>
                            <option>5 guests</option>
                            <option>6 guests</option>
                            <option>7 guests</option>
                            <option>8 guests</option>
                            <option>9 guests</option>
                            <option>10 guests</option>
                        </select>
                    </div>

                    <div className="booking-button-container">
                        <button className="booking-button" type="submit"> Reserve </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Booking;
