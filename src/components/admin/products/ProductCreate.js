import React, { useContext } from 'react'
import AppStoreContext from '../../../contexts/AppStore'
import products from '../../../apis/products'
import { toast } from '../../ui/Toaster'
import Form from './productForm/Form'


const ProductCreate = props => {

    const { dispatch } = useContext(AppStoreContext)
    const { catagory, subcatagory } = props.match.params

    const onformSubmit = async formValues => {

        console.log("formValues",formValues)

        const createRecord = async () => {
            dispatch({ type: "ASYNC_START" })
            const response = await products.post(`/saverecord.php`,{data:formValues, action:"add"})
            dispatch({type:'ADD_PRODUCT', payload:response.data}) 
            dispatch({ type: "ASYNC_END" })
            dispatch(toast('success', {message:'AWESOME 😘 🐬  ... NEW product ADDED 👏 '})) 
            props.history.push(`/admin/view/${catagory}/${subcatagory}/${response.data.id}`)  
        }

        if(formValues.imagefile === '') {
            dispatch(toast('confirm', {
                message:'Save without a product photo?', 
                duration:10,
                okText: 'YES',
                cancelText: 'CANCEL',
                onOk: () => {
                    createRecord()
                }
            
            }))
        } else {
            createRecord()
        }
    }  
      

    return (
        <div>
            <Form
                onSubmit={onformSubmit}
                initialValues={{
                    catagory,
                    sub: subcatagory,
                    gender: "",
                    sku: "",
                    title: "",
                    imagefile: "",
                    price: "",
                    description: "",
                    properties: ""
                    // gender: "",
                    // sku: "X",
                    // title: "X",
                    // imagefile: "",
                    // price: "X",
                    // description: "X",
                    // properties: "X"                    
                }}
            />
        </div>

    )
}


export default ProductCreate