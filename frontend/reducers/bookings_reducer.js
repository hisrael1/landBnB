const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case "RECEIVE_BOOKINGS":
            action.bookings.forEach((booking) => {
                nextState[booking.id] = booking;
            })
            return nextState;
        case "RECEIVE_BOOKING":
            nextState[action.booking.id] = action.booking;
            return nextState;
        default:
            return state;
    }
}

export default bookingsReducer;
