import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './LoginForm';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
