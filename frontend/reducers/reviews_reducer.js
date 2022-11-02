const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case "RECEIVE_REVIEWS":
            action.reviews.forEach(review => {
                nextState[review.id] = review;
            })
            return nextState;
        case "RECEIVE_REVIEW":
            nextState[action.review.id] = action.review;
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;
