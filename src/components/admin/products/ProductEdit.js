import React, { useContext, useEffect } from 'react'
import AppStoreContext from '../../../contexts/AppStore'
import products from '../../../apis/products'
import Form from './productForm/Form'

import { toast } from '../../ui/Toaster'

const ProductEdit = (props) => {

    const { state, dispatch } = useContext(AppStoreContext)

    useEffect(() => {
        (async (id) => {
            console.log("PRODUCT EDIT CALLEDD")
            dispatch({ type: "ASYNC_START" })
            const response = await products.get('/getrecord.php', { params: { id } })
            await wait(700)
            dispatch({ type: "FETCH_PRODUCT", payload: response.data })
            dispatch({ type: "ASYNC_END" })
        })(props.match.params.id)
    },[dispatch, props.match.params.id])    


    const wait = ms => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }      

    const onformSubmit = async (formValues) => {

        console.log("FormValues",formValues)

        try {
            dispatch({type:"ASYNC_START"}) 
            await wait(700)
            const response = await products.post(`/saverecord.php`, {data:formValues, action:"save"}) 
            dispatch({ type: 'EDIT_PRODUCT', payload: response.data})        
            dispatch({type:"ASYNC_END"})  
            dispatch(toast('success', {message:'😘 🐬  ... Product was UPDATED 👏 '}))
        } catch (error) {
            dispatch(toast('error', {message:error}))
        }        


    }

    if (!state.product) 
        return null
    else
        return(
            <Form
                initialValues={{ ...state.product }}
                onSubmit={onformSubmit}
            />
        )
}


export default ProductEdit