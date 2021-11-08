import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Login from "../Login/Login";
import Register from "../Register/Register"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

const Nav = () => {
    return (
        <Router>
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
             <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
              </Switch>
             
         
        </div>
        </Router>
    )
}

export default Nav
