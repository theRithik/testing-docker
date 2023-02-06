import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'

const Header =()=>{
    return(
        <>
        <div className='container'>
        <nav class="navbar bg-light" data-bs-theme="light">
       <ul>
        <Link to='/'>Home</Link>
        <Link to='/course'>Course</Link>
        <Link to='/enquires'>Enquires</Link>
        </ul>
       </nav>
       </div>
        </>
    )
}
export default Header;