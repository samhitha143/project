import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom';
import {authContext} from './ProvideAuth';

export function useAuth(){
    return useContext(authContext);
}
function AuthButton() {
    let History=useHistory();
    let auth=useAuth();
    return auth.user ? (
        <p>
            welcome!
            <button
            onClick={()=>{auth.signout(()=>History.push("/"));}}
            >SignOut</button>
        </p>):(<p>You are not logged in yet..</p>);
        
    
}

export default AuthButton
