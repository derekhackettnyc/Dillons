import React, { useContext } from 'react';

import LoginModal from './LoginModal'
import DeleteModal from './DeleteModal'
import LandingModal from './LandingModal'
import AppStoreContext from '../../contexts/AppStore';

import './modal.scss'

export const openModal = (modalType, modalProps) => {
    return{
        type:'OPEN_MODAL',
        payload: {
            modalType,
            modalProps
    }
}
}

const modalLookup = {
    LandingModal,
    LoginModal,
    DeleteModal
}

const ModalManager = () => {

    const { state } = useContext(AppStoreContext) 

    const currentModal = state.modal

    let renderModal;

    if(currentModal) {
        const {modalType, modalProps} = currentModal
        const ModalComponent = modalLookup[modalType]

        renderModal = <ModalComponent {...modalProps}/>
    }

    return (
        <span>{renderModal}</span>
    );
};

export default ModalManager