import React, { useContext, useEffect, useState, Fragment } from 'react';

import products from '../../apis/products';
import AppStoreContext from '../../contexts/AppStore';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../ui/Spinner';
import { hostServer } from '../../apis/products'
import { ShareOnFaceBook, Mailto, FaceBookMessenger, Sms, WhatsApp } from '../SocialMediaShare'

const GetProducts = (props) => {

    const [ptr, setPtr] = useState(0)
    const [perPage] = useState(3)

    const { state, dispatch } = useContext(AppStoreContext)
    const { catagory, subcatagory, gender } = props.match.params;

    useEffect(() => {
        (async (catagory, sub, gender) => {
            dispatch({ type: "ASYNC_START" })
            const response = await products.get('/getrecord.php', { params: { catagory, sub, gender } })
            dispatch({ type: "FETCH_PRODUCTS", payload: response.data })
            dispatch({ type: "UPDATE_CURRENT", payload: { category: catagory, sub, gender } })
            dispatch({ type: "ASYNC_END" })
        })(catagory, subcatagory, gender || null)
    }, [dispatch, catagory, subcatagory, gender])


    const LoadMore = () => {
        setPtr(ptr + perPage)
    }

    const renderItem = (product) => {

        function createMarkup(properties) {
            return { __html: properties };
        }

        const { id, title, sku, imagefile, description, price, sub, catagory, properties } = product

        return (
            <li className="product-item" key={id}>
                <div className="product-item__header">
                    <h2>{title}</h2>
                    <h3>{`ORDER NUMBER : ${sku}`}</h3>
                </div>
                <div className="product-item__image">
                    <img src={`${hostServer}/assets/images/products/${catagory}/${sub}/${imagefile}`} alt="product" />
                </div>
                <div className="product-item__body">
                    <input id={`item-${id}`} type="checkbox" />
                    <label htmlFor={`item-${id}`}></label>
                    <div id="expand">
                        <h3>Description</h3>
                        <p>{description}</p>

                        {properties &&
                            <div>
                                <h3>properties</h3>
                                <div dangerouslySetInnerHTML={createMarkup(properties)} />
                            </div>
                        }

                        <ul className="socials-icons">

                            <li>
                                <ShareOnFaceBook url={`http://dillonsjewellers.ie/php/item.php?catagory=${catagory}&sku=${sku}`}>
                                    <i className="fab fa-facebook-square fa-3x"></i>
                                </ShareOnFaceBook>
                            </li>

                            <li>
                                <FaceBookMessenger uri={`http://dillonsjewellers.ie/php/item.php?catagory=${catagory}&sku=${sku}`}>
                                    <i className="fab fa-facebook-messenger fa-3x"></i>
                                </FaceBookMessenger>
                            </li>

                            <li>
                                <Mailto email="derekhackettnyc@yahoo.com" subject={`Hey! I think you might like this ... 😏 `} body={`Dillons Jewellery ® | Official Website\n\n\n${title}\n\n\nhttp://dillonsjewellers.ie/php/item.php?catagory=${catagory}&sku=${sku}`}>
                                    <i className="far fa-envelope fa-3x"></i>
                                </Mailto>
                            </li>
                            <li className="mobile-only1">
                                <WhatsApp text={`Just saw this, thought you might like it 😏 😏 \n\nhttp://dillonsjewellers.ie/php/item.php?catagory=${catagory}&sku=${sku}`}>
                                    <i className="fab fa-whatsapp fa-3x"></i>
                                </WhatsApp>
                            </li>

                            <li className="mobile-only1">
                                <Sms uri={`http://dillonsjewellers.ie/php/item.php?catagory=${catagory}&sku=${sku}`} body={`Hey. I Saw this on a site. 😏 😏\n\nYou might like it ... %0A%0A${title}. %0A%0ADillons Jewellery ® | Official Website %0A%0A${title}`}>
                                    <i className="fas fa-sms fa-3x"></i>
                                </Sms>
                            </li>
                        </ul>

                    </div>
                    <div className="product-item__price">
                        {`€${price}`}
                    </div>
                </div>
            </li>
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
        <Fragment>
            {state.loading ?
                <Spinner />
                :
                <section className="list-products">
                    <h1 className="page-heading">{`${catagory} | ${subcatagory} Collection`}</h1>
                    <figure className="list-products__hero">
                        <picture>
                            <source media="(max-width : 767px)" srcSet={`/assets/images/${heroImage}-hero-mobile-1x.jpg`} />
                            <source media="(min-width: 768px)" srcSet={`/assets/images/${heroImage}-hero-1x.jpg`} />
                            <img src={`/assets/images/${heroImage}-hero-1x.jpg`} alt={catagory} />
                        </picture>
                    </figure>
                    <InfiniteScroll pageStart={1} loader={<Spinner key={0} />} loadMore={LoadMore} hasMore={(ptr + perPage <= state.products.length - 1)} initialLoad={false}>
                        <ul>
                            {
                                state.products.slice(0, ptr + perPage).map(product => renderItem(product))
                            }
                        </ul>
                    </InfiniteScroll>

                </section>
            }
        </Fragment>
    )

}

export default GetProducts