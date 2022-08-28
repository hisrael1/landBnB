import React from 'react';
import SignupFormContainer from '../session/SignupFormContainer';
import LoginFormContainer from '../session/LoginFormContainer';

const Modal = ({modal, closeModal}) => {

    if (!modal) {
        return null
    }
    else {
        let component;
        switch(modal) {
            case "login":
                component = <LoginFormContainer />;
                break;
            case "signup":
                component = <SignupFormContainer />;
                break;
        }
        return (
            <div id='modal-container'>
                <div className='modal'> {component} </div>
            </div>
        )
    }
}

export default Modal;
