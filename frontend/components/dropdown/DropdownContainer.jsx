import { openModal } from "../../actions/modal_actions";
import Dropdown from "./Dropdown";
import { connect } from 'react-redux';

const mapDispatchToProps = (modal) => ({
    openModal: (modal) => dispatch(openModal(modal))
})

const DropdownContainer = connect(null, mapDispatchToProps)(Dropdown);
export default DropdownContainer;
