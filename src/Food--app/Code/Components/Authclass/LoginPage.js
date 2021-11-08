import React from "react";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "./AuthButton";

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <h3>Login Page</h3>
      <p>You must login to view the page at {from.pathname}</p>
      <button onClick={login}>Log in </button>
    </div>
  );
};

export default LoginPage;