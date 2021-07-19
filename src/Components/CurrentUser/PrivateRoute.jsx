import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import {useAuth} from '../../AuthContext'
import CurrentUser from './CurrentUser'


export default function PrivateRoute() {
    
    const {currentUser} = useAuth()

    return (
        <div>
            <Route render={ props=>{ return currentUser? <CurrentUser {...props}/> : <Redirect to='/HomePage'/>}} />
            
        </div>
    )
}
