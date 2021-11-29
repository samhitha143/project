import React from 'react'
import './Login.scss'
const Login = () => {  
    return (
       
        <div className="body">
       <div className="contact">
        <h2>LOGIN</h2>
        <form action="">
            <p>Email</p>
            <input type="email" placeholder="Enter Email"/>
            <p>Password</p>
            <input type="password" placeholder="Enter Password"/>
            <input type="submit" value="Sign In"/>
            <p><input type="checkbox"/>Remember Me</p>
        </form>
     </div>
     </div>
    
    
    )
}

export default Login
