import { connect } from "react-redux";
import { indexReviews } from "../../actions/review_actions";
import { newReview } from "../../actions/review_actions";
import CreateReview from "./CreateReview";

const mapStateToProps = (state) => ({
    listings: state.entities.listings,
    reviews: state.entities.reviews,
    currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
    indexReviews: () => dispatch(indexReviews()),
    newReview: (review) => dispatch(newReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
