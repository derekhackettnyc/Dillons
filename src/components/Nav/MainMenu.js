import React, { useContext, useState, useEffect } from 'react';

import NavMenuItem from './NavMenuItem'
import AppStoreContext from '../../contexts/AppStore';
import { openModal } from '../Modal/ModalManager'
import { toast } from '../ui/Toaster'


const MainMenu = props => {

    const { state, dispatch } = useContext(AppStoreContext) 

    const [touchDevice, setTouchDevice] = useState(false)
    // const [selectionMade, setSelectionMade] = useState(false)

    const onFirstTouch = () => {
        setTouchDevice(true)
    }

    useEffect(() => {

        window.addEventListener('touchstart', onFirstTouch);
        return function cleanup() {
            window.removeEventListener('touchstart', onFirstTouch)
        }
    }, []);    

    const handleClickEvent = (nav) => {
        dispatch({type:'OPEN_DROPDOWN', payload:''})
        dispatch({type:'SELECT_NAVIGATION', payload:nav})
        dispatch({type:'MENUDRAW_OPENED', payload:false})
    }

    const handleTouchStart = (category) => {
        return (state.openedDropDown ? dispatch({type:'OPEN_DROPDOWN', payload:''}) : dispatch({type:'OPEN_DROPDOWN', payload:category}))
    }

    const handleUserEvent = (event, category) => {
        event.stopPropagation()
        dispatch({type:'OPEN_DROPDOWN', payload:category})
    }

    const handleSignIn = () => {
        dispatch(openModal('LoginModal', {data:39}))
    }

    const handleSignOut = () => {
        dispatch({type:'LOGOUT_USER'})
        dispatch(toast('success', {message:'You are now logged out .. 😘 👏 '}))
    }    

        const { nav } = props

        const actions = {
            handleClickEvent:handleClickEvent,
            handleTouchStart:handleTouchStart,
            handleUserEvent:handleUserEvent,
            handleSignIn:handleSignIn,
            handleSignOut:handleSignOut
        }

        return (

            <nav id="mainNav" className={`overlay ${props.isMenuDrawOpened? "opened" : "closed"}`}  >
                <div className="overlay-content">
                    <ul
                        className={`navigation ${!touchDevice ? "non-touch" : ""}`}
                        // onMouseEnter={() => this.setState({ selectionMade: false })}   
                    >
                        {
                            Object.keys(nav).map(key => {
                                return <NavMenuItem key={key} category={key} menuItem={nav[key]} actions={actions}/>
                            })
                        }
                    </ul>
                </div>
            </nav>

        )
}

export default MainMenu
