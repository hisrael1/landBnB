import { fetchReviews } from "../util/review_api_util";
import { createReview } from "../util/review_api_util";

export const receiveReviews = (reviews) => ({
    type: "RECEIVE_REVIEWS",
    reviews
})

export const indexReviews = () => dispatch => (
    fetchReviews().then(
        reviews => (dispatch(receiveReviews(reviews)))
    )
)

export const receiveReview = (review) => ({
    type: "RECEIVE_REVIEW",
    review
})

export const newReview = (review) => dispatch => (
    createReview(review).then(
        review => (dispatch(receiveReview(review)))
    )
)
