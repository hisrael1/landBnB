import React from "react";
import { connect } from "react-redux";
import ShowListing from "./ShowListing";
import { receiveListing } from "../../actions/listing_actions";
import { getUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    getListing: (listingId) => dispatch(receiveListing(listingId)),
    getUser: (userId) => dispatch(getUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowListing);
