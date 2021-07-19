import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'

import HamburgerImg11 from '../BackgroundImages/HamburgerImg11.jpg'

export default function HomePage() {
    return (
        <div className='card' style={{backgroundImage: `url(${HamburgerImg11})`  }} >
            <div className='card-body container-btn text-center'>
                <p style={{fontSize:'40px'}} className='eranClass'>Welcome to <span id='bolderHeader'> SVBurger</span></p>
                <p style={{fontSize:'30px'}} className='eranClass'>Lets start your way to our best burger</p><br />
              <Link to='/SignIn'>  <button style={{marginBottom:'40px',fontWeight:'bold',fontSize:'25px'}} className='btn btn-primary'>Sign In</button></Link><br />
              <Link to='/SignUp'>  <button style={{fontWeight:'bold',fontSize:'25px'}} className='btn btn-primary'>Sign Up</button></Link>
            </div>
        </div>

    )
}
