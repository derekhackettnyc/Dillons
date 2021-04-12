import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AppStoreContext from '../../../contexts/AppStore'
import products from '../../../apis/products'
import Spinner from '../../ui/Spinner'
import { hostServer } from '../../../apis/products'
import { openModal } from '../../Modal/ModalManager'


const ProductList = (props) => {


    const { state, dispatch } = useContext(AppStoreContext)
    const { catagory, subcatagory, gender } = props.match.params;

    useEffect(() => {
        (async (catagory, sub, gender) => {
            dispatch({ type: "ASYNC_START" })
            try {
                const response = await products['get']('/getrecord.php', { params: { catagory, sub, gender } })
                await wait(700)
                dispatch({ type: "FETCH_PRODUCTS", payload: response.data })
                dispatch({ type: "UPDATE_CURRENT", payload: { category: catagory, sub, gender } })
            }
            catch (err) {
                throw new Error(err);
            }
            finally {
                dispatch({ type: "ASYNC_END" })
            }
        })(catagory, subcatagory, gender || null)
    }, [dispatch, catagory, subcatagory, gender])


    const wait = ms => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }


    const renderList = (catagory, subcatagory) => {

        console.log("PRODUCT LIST")

        return (
            <Fragment>

                <Link to={`/admin/new/${catagory}/${subcatagory}`}>
                    <button className="productlist__admin"><i className="fas fa-pencil-alt"></i></button>
                </Link>

                {state.loading ?
                    <Spinner />
                    :
                    state.products.map(product => {
                        const { id, title, sku, imagefile, price, sub, catagory } = product
                        const fullimagePath = imagefile ? `${hostServer}/assets/images/products/${catagory}/${sub}/${imagefile}` : `/assets/images/placeholder.jpg`

                        return (

                            <li className="productlist__card productlist-card" key={id}>

                                <div className="productlist-card__particulars">
                                    <div className="productlist-card__imagebox">
                                        <img className="productlist-card__image" src={fullimagePath} alt="product" />
                                    </div>
                                    <div className="productlist-card__textbox">
                                        <Link className="productlist-card__link" to={`/admin/view/${catagory}/${subcatagory}/${id}`}>{title}</Link>
                                        <p>{sku}</p>
                                        <p className="productlist-card__price">{`€${price}`}</p>
                                    </div>
                                </div>
                                <div className="productlist-card__admin">
                                    <Link to={`/admin/edit/${catagory}/${subcatagory}/${id}`} className="productlist-card__admin--edit">Edit</Link>
                                    <button className="productlist-card__admin--delete" onClick={() => dispatch(openModal('DeleteModal', { id }))}>Delete</button>
                                </div>
                            </li>

                        )
                    })

                }
            </Fragment>
        )
    }

    let heroImage = ''

    switch (catagory) {
        case 'watches': {
            heroImage = subcatagory === 'bering' ? 'bering' : 'sekonda'
            break
        }
        case 'contemporary':
            heroImage = subcatagory === 'coeurdelion' ? 'coeurdelion' : subcatagory === 'bronzallure' ? 'bronzallure' : subcatagory
            break
        default:
            heroImage = catagory
            break
    }

    return (
        <section className="list-products">
            <h1 className="page-heading">{`${catagory} | ${subcatagory} Collection`}</h1>
            <figure className="list-products__hero">
                <picture>
                    <source media="(max-width : 767px)" srcSet={`/assets/images/${heroImage}-hero-mobile-1x.jpg`} />
                    <source media="(min-width: 768px)" srcSet={`/assets/images/${heroImage}-hero-1x.jpg`} />
                    <img src={`/assets/images/${heroImage}-hero-1x.jpg`} alt={catagory} />
                </picture>
            </figure>
            <ul className="productlist">
                {renderList(catagory, subcatagory)}
            </ul>
        </section>
    )
}

export default ProductList