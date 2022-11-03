import { fetchBookings } from "../util/booking_api_util";
import { createBooking } from "../util/booking_api_util"; 

export const receiveBookings = (bookings) => ({
    type: "RECEIVE_BOOKINGS",
    bookings
})

export const receiveBooking = (booking) => ({
    type: "RECEIVE_BOOKING",
    booking
})

export const indexBookings = () => dispatch => (
    fetchBookings().then(
        bookings => dispatch(receiveBookings(bookings))
    )
)

export const newBooking = (booking) => dispatch => (
    createBooking(booking).then(
        booking => dispatch(receiveBooking(booking))
    )
)
