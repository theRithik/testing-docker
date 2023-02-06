import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Home from './container/home';
import store from './store/storeFile'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Home/>
    </Provider>
)