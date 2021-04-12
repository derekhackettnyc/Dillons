import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppStore } from './contexts/AppStore';
import App from './components/App'
import './resources/scss/wild-style.scss'

ReactDom.render(
    // <Provider>
        <BrowserRouter basename='/dj3/'>
                <AppStore >
                    <App />
                </AppStore>
        </BrowserRouter>,
    // </Provider>,
    document.querySelector('#root')
)
