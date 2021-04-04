import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = e => {
        //login logics
        auth.signInWithPopup(provider)
        .catch((err)=>alert(err.message));
        
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png" alt="" srcset=""/>
            </div>
            <Button onClick={signIn}  >Sign In</Button>
        </div>
    )
}

export default Login
