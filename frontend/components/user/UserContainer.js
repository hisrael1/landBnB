import { connect } from "react-redux";
import User from "./User";

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id]
})

export default connect(
    mapStateToProps,
    null
)(User);
