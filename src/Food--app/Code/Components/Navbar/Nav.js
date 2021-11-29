import React from 'react'
import Login from "../Login/Login";
import Register from "../Register/Register"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './Nav.scss';


const Nav = () => {
    return (
        <Router>
        <div className="buttons">
            <Link to="/login" target="/login">Login</Link>
            <Link to="/register" target="/register">Register</Link>
             <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
              </Switch>
        </div>
        </Router>
    )
}

export default Nav
