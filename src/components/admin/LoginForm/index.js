import React from 'react'
import useForm from '../products/productForm/useForm'
import validate from '../products/productForm/formValidation'
import AppStoreContext from '../../../contexts/AppStore'
import products from '../../../apis/products'
import { toast } from '../../ui/Toaster'

export const productFormSchemia = [
    {
        label: "Enter Email",
        name: "loginEmail",
        type: "email",
    },
    {
        label: "Enter Password",
        name: "password",
        type: "password"
    }
]

const InputField = ({ name, label, value, type, errors, onChange, onFocus }) => {
    return (
        <div >
            <input type={type} value={value} name={name} autoComplete="off" placeholder={label} onChange={onChange} onFocus={onFocus} />
            {
                errors[name] &&
                <p className='form-field__error'>
                    {`${errors[name]} must be filled in 😕`}
                </p>
            }
        </div>
    )
}

const LoginForm = () => {

    const { dispatch } = React.useContext(AppStoreContext)

    const login = async (creds) => {
        try {
            await products.post('/password.php', { password: creds.password })
            dispatch({ type: 'LOGIN_USER', payload: creds.loginEmail })
            dispatch({ type: 'CLOSE_MODAL' })
            dispatch(toast('success', { message: 'Awesome 😘 🐬  You are logged in 👏', duration: 3 }))
        } catch (error) {
            dispatch(toast('error', { message: 'USERNAME or PASSWORD invalid', duration: 5 }))
        }
    }


    const { handleSubmit, errors, formData, handlers } = useForm(login, validate, productFormSchemia, {})

    const formFields = Object.entries(formData).reduce((arr, [key, { label, type, value }]) =>
        [...arr,
        <InputField key={key} name={key} type={type} label={label} value={value} {...handlers} errors={errors} />
        ], [])

    return (
        <form className="basic-form" onSubmit={handleSubmit} id="LoginForm" noValidate>
            {
                formFields
            }
            <button type='submit' className="editCard__button editCard__button--save"><i className="fas fa-sign-in-alt"></i></button>
        </form>
    )
}

export default LoginForm
