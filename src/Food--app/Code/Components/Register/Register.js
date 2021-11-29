import React from 'react'
import "./Register.scss";
const Register = () => {    
return (
  
       <div className="body">
        <div className="content">
            <h2>Register</h2>
        <form action="">
            <p>FirstName</p>
            <input type="text" placeholder="Enter FirstName"/>
            <p>LastName</p>
            <input type="text" placeholder="Enter LastName"/>
            <p>Email</p>
            <input type="email" placeholder="Email"/>
            <p>Create Password</p>
            <input type="password" placeholder="Create Password"/>
            <p>Confirm Password</p>
            <input type="password" placeholder="Confirm Password"/>
            <input type="submit" value="Sign In"/>
            <p><input type="checkbox"/>Remember Me</p>
        </form> 
        </div>
        </div>
       
    )
}

export default Register
