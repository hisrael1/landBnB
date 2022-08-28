import { openModal } from "../../actions/modal_actions";
import Dropdown from "./Dropdown";
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";

const mapDispatchToProps = (modal) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

const DropdownContainer = connect(null, mapDispatchToProps)(Dropdown);
export default DropdownContainer;
