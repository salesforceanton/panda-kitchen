import ReactDOM from 'react-dom';

import './Modal.css';
import React from 'react';

const Modal = (props) => {
    const backdropClickHandler = (e) => {
        e.stopPropagation();
        props.onModalClose();
    }
    const modalClickHandler = (e) => {
        e.stopPropagation();
    }

    if (!props.show) {
        return null;
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className='backdrop' onClick={backdropClickHandler}>
                    <div className='modal' onClick={modalClickHandler}>
                        {props.children}
                    </div>
                </div>,
                document.getElementById('overlays')
                )
            }
        </React.Fragment>
    );
        
}

export default Modal;