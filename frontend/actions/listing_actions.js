import { fetchListings } from "../util/listing_api_util";


export const receiveListings = (listings) => ({
    type: "RECEIVE_LISTINGS",
    listings
})


export const indexListings = () => dispatch => (
    fetchListings().then(
        listings => (dispatch(receiveListings(listings)))
    )
)
