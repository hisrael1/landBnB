import React from 'react';

const Modal = ({modal, closeModal}) => {

    if (!modal) {
        return null
    }
    else {
        return (
            <div id='modal-container' onClick={() => closeModal()}>
                <h1 className='modal'> {modal} </h1>
            </div>
        )
    }
}

export default Modal;

