import React from 'react';

class Booking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {check_in_date: "", check_out_date: "", num_guests: 1, guest_id: this.props.user_id, listing_id: null, positionType: "booking-container-sticky"}
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
        this.isBookingValid = this.isBookingValid.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps && this.props.listing) {
            this.setState({listing_id: this.props.listing.id})
        }
    }

    listenScrollEvent(e) {
        if (window.scrollY < 500) {
            this.setState({positionType: "booking-container-sticky"})
        } else if (window.scrollY > 850) {
            this.setState({positionType: "booking-container-sticky-lower"})
        } else {
            this.setState({positionType: "booking-container-fixed"})
        }
    }

    isBookingValid() {
        let bookingValid = true;
        if (this.state.check_in_date && this.state.check_out_date) {
            if (this.state.check_out_date <= this.state.check_in_date) {
                return false;
            }
            this.props.bookings.forEach(
                booking => {
                    if (this.state.check_in_date >= booking.check_in_date && this.state.check_in_date < booking.check_out_date) {
                        bookingValid = false
                    } else if (this.state.check_out_date > booking.check_in_date && this.state.check_out_date <= booking.check_out_date) {
                        bookingValid = false
                    } else if (this.state.check_in_date <= booking.check_in_date && this.state.check_out_date >= booking.check_out_date) {
                        bookingValid = false
                    } 
                }
            )
            return bookingValid
        }
    }

    onChange(e) {
        e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;
        if (name == "num_guests") {
            value = parseInt(value)
        }
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        delete this.state.positionType;
        this.props.newBooking(this.state);
        this.props.history.push("/");
    }

    render() {
        let bookingValid = true;
        if (this.state.check_in_date && this.state.check_out_date) {
            bookingValid = this.isBookingValid();
        }

        return (
                <div className={this.state.positionType}>
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
                        <input className='booking-check-in' name="check_in_date" type="date" value={this.props.check_in_date} onChange={this.onChange}>
                        </input>


                        <input className='booking-check-out' name="check_out_date" type="date" value={this.props.check_out_date} onChange={this.onChange}>
                        </input>
                    </div>
                    <div className='booking-num-guests-container'>
                        <select className='booking-num-guests' name="num_guests" value={this.props.num_guests} onChange={this.onChange}>
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                            <option value="7">7 guests</option>
                            <option value="8">8 guests</option>
                            <option value="9">9 guests</option>
                            <option value="10">10 guests</option>
                        </select>
                    </div>

                    <div className="booking-button-container">
                        {bookingValid ? 
                            <button className="booking-button" type="submit" onClick={this.handleSubmit}> Reserve </button>
                            :
                            <button className="booking-button-false" type="button"> Dates unavailable </button>
                        }
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default Booking;
