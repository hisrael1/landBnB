// import actions
import { openModal, closeModal } from "../../actions/modal_actions";
import Modal from "./Modal";
import { connect } from 'react-redux';

// map modal state to props
const mapStateToProps = (state) => ({
    modal: state.modal
})

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
    closeModal: dispatch(closeModal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;

