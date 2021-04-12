import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'

import AppStoreContext from '../../../contexts/AppStore';
import products from '../../../apis/products';
import { hostServer } from '../../../apis/products';


const ProductShow = (props) => {

    const { state, dispatch } = useContext(AppStoreContext)

    useEffect(() => {
        (async (id) => {
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


    if (!state.product)
        return null

    const { title, sku, imagefile, description, price, sub, catagory } = state.product
    const linkTo = props.location.pathname.substring(0,props.location.pathname.lastIndexOf("/")).replace("view", "list").replace("/item", "");
    const fullimagePath = imagefile ? `${hostServer}/assets/images/products/${catagory}/${sub}/${imagefile}` : `/assets/images/placeholder.jpg`
    
    return ( 
        <div className="product-item product-item--item ">
                <Link to={linkTo} className="product-item__close"><i className="fas fa-window-close"></i></Link>
                <div className="product-item__header">
                    <h2>{title}</h2>
                    <h3>{`ORDER NUMBER : ${sku}`}</h3>
                </div>
                <div className="product-item__image">
                    <img src={fullimagePath} alt="product" />
                </div>
                <div className="product-item__body">
                    <input id="card-0" type="checkbox"/>
                    <label htmlFor="card-0"></label>
                    <div id="expand">	
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                    <div className="product-item__price">
                        {`€${price}`}
                    </div>                    
                </div>
        </div>   
    )
}

export default ProductShow
