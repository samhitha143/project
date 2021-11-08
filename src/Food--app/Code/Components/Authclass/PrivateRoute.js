import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthButton'
const PrivateRoute = ({children,...rest}) => {
    let auth=useAuth();
    return (
        <div>
            <Route
            {...rest}
            render={({location})=>
        auth.user ? (children):(
            <Redirect to={{pathname:"/login",state:{from:location}}}/>
        )
    }
            />
            
        </div>
    )
}

export default PrivateRoute
