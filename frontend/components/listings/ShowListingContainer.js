import React from "react";
import { connect } from "react-redux";
import ShowListing from "./ShowListing";
import { receiveListing } from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    getListing: (listingId) => dispatch(receiveListing(listingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowListing);
