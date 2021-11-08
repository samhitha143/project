import React from 'react'
import './Login.scss'
import {makeStyles} from  '@material-ui/core/styles';
const Login = () => {
        const useStyles=makeStyles(() => ({
            root:{
              minHeight:"100vh",
              backgroundImage:`url(${process.env.PUBLIC_URL +'/images/f1.jpg'})`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
           
            }
          }));
          const classes=useStyles();
    
    return (
      <div className={classes.root}>
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
     </div>
    
    )
}

export default Login
