import { connect } from "react-redux";
import User from "./User";

const mapStateToProps = state => ({
    user: Object.values(state.entities.users)[0]
})

export default connect(
    mapStateToProps,
    null
)(User);
