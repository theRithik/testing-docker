import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/home';
import Enquire from './enquire'
import Form from './home/form'

const Routing =()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Form" component={Form}/>
        <Route path="/enquires" component={Enquire}/>      
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;