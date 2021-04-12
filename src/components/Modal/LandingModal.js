import React, { useContext } from 'react';

import AppStoreContext from '../../contexts/AppStore';
import CountDown from '../../elements/CountDown';

const LandingModal = () => {

    const { state, dispatch } = useContext(AppStoreContext)

    return (
        <div className="modal" onClick={() => dispatch({type:'CLOSE_MODAL'})}>
            <div className="modal__body" onClick={(event) => event.stopPropagation()}>
                <div className="modal__header">
                    CLOSED due to NATIONAL Lockdown
                </div>
                <div className="modal__content">
                    <CountDown message={state.countDown.message} deadline={state.countDown.deadline} />
                </div>
            </div>
        </div>
    );
}

export default LandingModal
