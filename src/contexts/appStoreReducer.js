import { useReducer } from 'react'

export const initialState = {
    hostServer: 'http://3littlebirdsnyc.com/dj3',
    category: 'watches',
    product: null,
    products: [],
    gender: '',
    brand: '',
    action: null,
    loading: false,
    countDown: {
        deadline: 'Dec, 1, 2021',
        message: 'Get ready. XMAS begins in ... 😱'
    },
    auth: {
        authenticated: false,
        currentUser: null
    },
    menuDrawOpened: false,
    navigation: null,
    openDropDown: '',
    modal: null,
    toast: null
}

// const initialValues={
//     category: "watches",
//     brand: "bering",
//     gender: "",
//     sku: "",
//     title: "",
//     imagefile: "kennymac.jpg", //"giphy.gif",
//     price: "",
//     description: "",
//     properties: ""
// }



export const appStoreReducer = (state, { type, payload }) => {
    switch (type) {
        case 'FETCH_PRODUCTS': {
            return {
                ...state,
                products: payload,
                product: null
            }

        }
        case 'UPDATE_CURRENT': {
            return {
                ...state,
                current: payload
            }

        }
        case "FETCH_PRODUCT": {

            return {
                ...state,
                product: payload.length === 0 ? null : payload[0],
                action: 'fetch',
            }
        }
        case "VIEW_PRODUCT": {
            return {
                ...state,
                action: 'view',
                product: payload
            }
        }
     
        case "ADD_PRODUCT": {
            return {
                ...state,
                action: 'add',            
                products: [...state.products, payload],
                product: { ...payload }
            }
        }
        case "EDIT_PRODUCT": {

            const idx = state.products.findIndex(product => product.id === payload.id)
            const tmpArr = [...state.products]
            tmpArr[idx] = payload

            return {
                ...state,
                products: tmpArr,
                product: payload,
                action: 'fetch',
            }
        }
        case 'DELETE_PRODUCT': {

            const filtedProducts = state.products.filter(product => product.id !== payload)
            return {
                ...state,
                products: filtedProducts,
                product: null,
                action: null,
                modal: null,
                navigation: null
            }

        }
        case 'CLOSE_PRODUCT': {
            return {
                ...state,
                product: null,
                action: null,
            }
        }
        case "ASYNC_START": {
            return {
                ...state,
                loading: true
            }
        }
        case "ASYNC_END": {
            return {
                ...state,
                loading: false
            }
        }

        case 'FILTER': {
            return {
                ...state,
                products: payload.data,
                sex: payload.sex,
            }
        }

        case 'FILTER_BRAND': {
            return {
                ...state,
                products: payload.data,
                ...payload.filter
            }
        }

        case 'CLEAR_FOOTER': {
            return {
                ...state,
                products: [],
                brand: '',
                sex: ''
            } 
        }

        case 'LOGIN_USER':
            return {
                ...state,
                auth: {
                    authenticated: true,
                    currentUser: payload
                }
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                auth: {
                    authenticated: false,
                    currentUser: null
                }
            }
        case 'MENUDRAW_OPENED':
            return {
                ...state,
                menuDrawOpened: payload
            }
        case 'OPEN_DROPDOWN':
            return {
                ...state,
                openDropDown: payload
            }
        case 'SELECT_NAVIGATION':
            return {
                ...state,
                navigation: payload,
                openDropDown: ''
            }

        case 'OPEN_MODAL':
            return {
                ...state,
                modal: payload
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: null
            }
        case 'SHOW_TOAST':
            return {
                ...state,
                toast: payload
            }
        case 'BURNT_TOAST':
            return {
                ...state,
                toast: null
            }
        case "CHANGE_RESOURCE": {
            return {
                ...state,
                resource: payload
            }
        }
        default:
            return state
    }
}


export const CreateStore = () => useReducer(appStoreReducer, initialState) 
