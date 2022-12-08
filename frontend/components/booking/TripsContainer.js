import Trips from './Trips';
import { connect } from 'react-redux';
import { indexListings } from '../../actions/listing_actions';
import { indexBookings } from '../../actions/booking_actions';

const mapStateToProps = (state) => ({
    userId: state.session.id,
    bookings: Object.values(state.entities.bookings),
    listings: state.entities.listings
})

const mapDispatchToProps = dispatch => ({
    getListings: () => dispatch(indexListings()),
    getBookings: () => dispatch(indexBookings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
