import React from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Link,
} from 'react-router-dom';
import AuthButton from './AuthButton';
import ProvideAuth from './ProvideAuth';
import LoginPage from './LoginPage';
import PublicPage from './PublicPage';
import ProtectedPage from './ProtectedPage';
import PrivateRoute from './PrivateRoute';
const AuthExample = () => {
    return (
     <ProvideAuth>
           <Router>
           <div>
               <AuthButton/>
               <ul>
                   <li>
                       <Link to="/public">Public page</Link>
                   </li>
               </ul>
               <ul>
                   <li>
                       <Link to="/protected">Protected page</Link>
                   </li>
               </ul>
               <Switch>
                   <Route path="/public">
                       <PublicPage/>
                   </Route>
                   <Route path="/login">
                       <LoginPage/>
                   </Route>
                   <PrivateRoute path="/protected">
                       <ProtectedPage/>
                       
                   </PrivateRoute>
               </Switch>
           </div>
       </Router>
     </ProvideAuth>
    )
}

export default AuthExample
