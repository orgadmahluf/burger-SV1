import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from "../../AuthContext"
import { useHistory } from "react-router-dom"
import './SignIn.css'
import HamburgerImg3 from '../BackgroundImages/HamburgerImg12.jpg'


export default function SignIn() {
  
    const { login } = useAuth()
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {

          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          alert("Failed to log in")
        }
    

      }
    


    return (
    <div className='card1 container-input text-center' style={{backgroundImage: `url(${HamburgerImg3})`}}>
        <form onSubmit={handleSubmit}>
            <div className='card-body text-center'>
               <input className='form-control' ref={emailRef} type="text" placeholder='Enter your email'/><br />
               <input className='form-control' ref={passwordRef} type="password" placeholder='Enter your password'/><br />
               <Link id='forgotId' to="/Forgot-Password">Forgot Password?</Link><br />
               <button type='submit' style={{fontWeight:'bold'}} className='btn btn-primary'>Sign in</button>
            </div>
        </form>
       
    </div>
    )
}
