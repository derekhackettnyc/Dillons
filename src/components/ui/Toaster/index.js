import React, { useEffect, useContext } from 'react'
import AppStoreContext from '../../../contexts/AppStore';


export const toast = (toastType, toastProps) => {
    return {
        type: 'SHOW_TOAST',
        payload: {
            toastType,
            toastProps
        }
    }
}

const toastLookup = {
    success: {
        type: 'success',
        title: 'AWESOMENESS 😎 ',
        bgCol: '#5cb85c',
        icon: 'fas fa-3x fa-thumbs-up'
    },
    error: {
        type: 'danger',
        title: 'error . . .',
        bgCol: 'orangered',
        icon: "fas fa-3x fa-bug"
    },    
    danger: {
        type: 'danger',
        title: 'Achtung Baby',
        bgCol: '#d9534f',
        icon: "fas fa-3x fa-skull-crossbones"
    },
    confirm: {
        type: 'confirm',
        title: 'Confirm',
        bgCol: 'dodgerblue',
        icon: "fas fa-3x fa-exclamation-triangle",
        K: () => {
            console.log("WOW, you did it ... fair play")
            console.log(this.icon)
        }
    },

}

const ToastComponent = props => {

    const { type, title, icon, message, bgCol, duration = 5, onOk } = props

    const { dispatch } = useContext(AppStoreContext)
    // const [showPopUp, setShowPopUp] = useState('');
    const ms = duration * 1000

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({ type: 'BURNT_TOAST' })
        }, ms);
        return function cleanup() {
            clearTimeout(timeout)
        }
    }, [dispatch,ms]);

    
    return (
        <div className={`toast`} style={{ backgroundColor: bgCol, animationDelay: `0s, ${duration - (0.15)}s` }}>
            <div>
                <i className={icon}></i>
            </div>
            <div className='toast__content'>
                <h3 className='toast__title'>{title}</h3>
                <p className='toast__message'>{message}</p>
                {
                    type === 'confirm' &&
                        <div className="toast__confirm">
                            <button className='none' onClick={onOk}>YES</button>
                            <button className='none' onClick={() => dispatch({ type: 'BURNT_TOAST' })}>NO</button>
                        </div>
                }
            </div>
            <button className='toast__close none' onClick={() => dispatch({ type: 'BURNT_TOAST' })}>
                <i className="fas fa-2x fa-times-circle"></i>
            </button>
        </div>
    )
} 

const Toaster = props => {

    const { state } = useContext(AppStoreContext)

    const currentToast = state.toast

    let renderToast = null;

    if (currentToast) {
        const id = Math.floor((Math.random() * 101) + 1);
        const { toastType, toastProps } = currentToast
        renderToast = <ToastComponent {...toastLookup[toastType]} {...toastProps} id={id} />
    }

    return (
        <div className='toaster'>
            {renderToast}
        </div>
    )
}

export default Toaster