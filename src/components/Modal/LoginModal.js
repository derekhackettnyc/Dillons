import React, { useContext } from 'react'

import AppStoreContext from '../../contexts/AppStore'
import LoginForm from '../admin/LoginForm'

const LoginModal = () => {
    const { dispatch } = useContext(AppStoreContext)
        return (
            <div className="modal" onClick={() => dispatch({type:'CLOSE_MODAL'})}>
            <div className="modal__body" onClick={(event)=>event.stopPropagation()}>
                <div className="modal__header">
                    Login to Dashboard
                </div>
                <div className="modal__content">
                    <LoginForm />
                </div>
            </div>
        </div>
        )
}

export default LoginModal
