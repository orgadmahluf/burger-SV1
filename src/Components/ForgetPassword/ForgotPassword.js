import React, { useRef } from "react"
import { useAuth } from "../../AuthContext"
import { Link } from "react-router-dom"
import './ForgotPassword.css'
import HamburgerImg5 from '../BackgroundImages/HamburgerImg12.jpg'


export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {

      await resetPassword(emailRef.current.value)
      alert("Check your inbox for further instructions")
    } catch {
      alert("Failed to reset password")
    }


  }

  return (
    <>
      <div className = 'card4' style={{backgroundImage: `url(${HamburgerImg5})`}}>
        <div>

          <form onSubmit={handleSubmit}>
            <div className='card-body container-btn text-center' id="email">
              <input id='inputForgotPassword' type="email" ref={emailRef} placeholder='Enter Your Email' required /> <br />
            <button style={{marginBottom:'40px',fontWeight:'bold'}} className='btn btn-primary' type="submit">
              Reset Password
            </button>
            </div>
          </form>
          <div className="w-100 text-center mt-3">
            <Link className='SignInUpButton' to="/SignIn">Sign In</Link>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
       <span id='labelId'> Need an account? </span> <Link className='SignInUpButton' to="/SignUp">Sign Up</Link>
      </div>
    </>
  )
}
