import { connect } from "react-redux";
import { indexListings } from "../../actions/listing_actions";
import Listings from "./Listings";

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    indexListings: () => dispatch(indexListings())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listings);
