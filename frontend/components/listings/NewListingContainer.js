import { connect } from "react-redux";
import NewListing from "./NewListing";

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id]
})

export default connect(
    mapStateToProps,
    null
)(NewListing);
