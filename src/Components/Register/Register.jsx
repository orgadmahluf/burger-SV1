import React,{useRef} from 'react'
import './Register.css'
import { useAuth } from "../../AuthContext"
import {writeUserData} from '../../firebase'
import { useHistory } from "react-router-dom"
import HamburgerImg3 from '../BackgroundImages/HamburgerImg12.jpg'
export default function Register() {
    const { signup,currentUser } = useAuth()
    const history = useHistory()
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    function validDetails(){
        if(firstNameRef.current.value.length ===1 || firstNameRef.current.value.length>10)
            throw 'First name must be between 2 and 10 characters'
        else if(!(/^[a-zA-Z]+$/.test(firstNameRef.current.value)))
            throw 'First name must be in English letters only'
        else if(lastNameRef.current.value.length===1 || lastNameRef.current.value.length>10)
            throw 'Last name must be between 2 and 10 characters'
        else if(!(/^[a-zA-Z]+$/.test(lastNameRef.current.value)))
            throw 'Last name must be in English letters only'
        else if(emailRef.current.value.indexOf('@')<0)
            throw 'miising @'
        // else if(emailRef.current.value.indexOf('gmail') < 0 && emailRef.current.value.indexOf('yahoo') < 0 )
        //     throw 'gmail or yhaoo only'
        // TODO: Capital Letter
        else if(passwordRef.current.value !== passwordConfirmRef.current.value)
            throw 'password and confirm error'
    }

    async function handleSubmit(e) {
        e.preventDefault()
    
        try{
            
          validDetails();
          await signup(emailRef.current.value, passwordRef.current.value)
          writeUserData(firstNameRef.current.value,lastNameRef.current.value,passwordRef.current.value,emailRef.current.value)
          history.push('/')
        }catch(e){
          alert(e.toString());
        }

    
      
      }

    return (
        <div className='card2 container-input text-center' style={{backgroundImage: `url(${HamburgerImg3})`}}>
            <div className='card-body text-center'>
                <form onSubmit={handleSubmit}>
               <input  className='form-control' ref={firstNameRef} type="text" placeholder='Type your first name'/><br />
               <input  className='form-control' ref={lastNameRef} type="text" placeholder='Type your last name'/><br />
               <input required className='form-control' type="email" ref={emailRef} placeholder='Enter your email'/><br />
               <input required className='form-control' type="password" ref={passwordRef} placeholder='Create Password'/><br />
               <input required className='form-control' type="password" ref={passwordConfirmRef} placeholder='Confirm Password'/><br />
               <button type='submit' style={{fontWeight:'bold'}} className='btn btn-primary'>Sign Up</button><br />
               </form>
            </div>
        </div>
    )
}
