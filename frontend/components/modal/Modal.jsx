import React from 'react';

const Modal = ({modal, closeModal}) => {

    if (!modal) {
        return null;
    }
    else {
        return <h1> {modal} </h1>
    }
}

export default Modal;
