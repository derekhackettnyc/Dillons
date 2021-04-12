import React, { Fragment, useContext, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import About from './About';
import Dashboard from './admin/Dashboard';
import ProductCreate from './admin/products/ProductCreate';
import ProductEdit from './admin/products/ProductEdit';
import ProductList from './admin/products/ProductList';
import ProductShow from './admin/products/ProductShow';
import Contact from './ContactUs';
import AdminLayout from './HOC/AdminLayout';
import Layout from './HOC/Layout';
import HomePage from './Home';
import ModalManager from './Modal/ModalManager';
import GetProducts from './products/getProducts';
import AppStoreContext from '../contexts/AppStore';
import { debounce } from './utils'
import Toaster from './ui/Toaster';


const App = () => {

    const { state, dispatch } = useContext(AppStoreContext)

    const myEfficientFn = debounce(() => dispatch({ type: 'MENUDRAW_OPENED', payload: false }), 500)

    useEffect(() => {
        window.addEventListener('resize', myEfficientFn);
        return function cleanup() {
            window.removeEventListener('resize', myEfficientFn)
        }
    }, [myEfficientFn]);

    // const authenticated = true //state.auth.authenticated    
    const authenticated = state.auth.authenticated

    return (
        <Fragment>
            <Toaster />
            <ModalManager />

            {authenticated ? (
                <AdminLayout>
                    <Switch>
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path={['/admin/list/:catagory/:subcatagory', '/admin/list/:catagory/:subcatagory/:gender']} exact component={ProductList} />
                        <Route path='/admin/view/:catagory/:subcatagory/:id' exact component={ProductShow} />
                        <Route path='/admin/edit/:catagory/:subcatagory/:id' exact component={ProductEdit} />
                        <Route path='/admin/new/:catagory/:subcatagory' exact component={ProductCreate} />
                        <Redirect to="/dashboard" />
                    </Switch>
                </AdminLayout>

            ) : (
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/:catagory/:subcatagory/item/:id" exact component={ProductShow} />
                            <Route path={['/:catagory/:subcatagory', '/:catagory/:subcatagory/:gender']} exact component={GetProducts} />
                            <Redirect to="/" />
                        </Switch>
                    </Layout>

                )}
        </Fragment>
    )
}

export default withRouter(App);


