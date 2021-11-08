import React, { useState } from 'react'

const fakeAuth={
    isAuthenticated:false,
    signin(cb){
        fakeAuth.isAuthenticated=true;
        setTimeout(cb,100);
    },
    signout(cb){
        fakeAuth.isAuthenticated=false;
        setTimeout(cb,100);
    }
};
 const useProvideAuth = () => {
const [user,setUser]=useState();

const signin=(cb)=>{
    return fakeAuth.signin(()=>{
        setUser("user");
        cb();
    });
}
 const signout=(cb)=>{
     return fakeAuth.signout(()=>{
         setUser(null);
         cb();
     })
 }
    return {
        user,
        signin,
        signout,
    }
}

export default useProvideAuth;
