import React, { useContext, useEffect } from 'react'
import AppStoreContext from '../../contexts/AppStore'

import products from '../../apis/products'
import { toast } from '../ui/Toaster'


const DeleteModal = ({id}) => {

    const { dispatch } = useContext(AppStoreContext)

    useEffect(() => {
        dispatch(toast('danger', {message:'You are about to delete a product'}))
    },[dispatch])

    const onYes = async () => {
        await products.post(`/saverecord.php`, { data: { id }, action: "delete" })
        dispatch({ type: 'DELETE_PRODUCT', payload: id })
        dispatch(toast('success', {message:'AWESOME 😘 🐬  ... Product was DELETED 👏 '}))
    }

    const onNo = () => {
        dispatch({ type: 'BURNT_TOAST' })
        dispatch({ type: 'CLOSE_MODAL' })
    }

    console.log("delete modal")

    return (
        <div className="modal" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            <div className="modal__body" onClick={(event) => event.stopPropagation()}>
                <div className="modal__header">
                    {`Delete This Product - ID : ${id}`}
                </div>
                <div className="modal__content">
                    <button onClick={onYes}>YES</button>
                    <button onClick={onNo}>NO</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
