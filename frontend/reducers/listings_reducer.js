const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case "RECEIVE_LISTINGS":
            action.listings.forEach((listing) => {
                nextState[listing.id] = listing;
            })
            return nextState;
        default:
            return state;
    }
}

export default listingsReducer;
