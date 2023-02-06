import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks/UseAuthContext/UserAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {logIn,logOut,user}=useAuthContext();
    const {state}=useLocation()
    const navigate = useNavigate()
    const username= useRef()
    const login = () => {

        logIn(username.current.value)
        navigate(state.pathname,{replace:true})

    }
        console.log('yes')
    return (
        <div>
            <input type="text" placeholder={'username_for_login'} ref={username}/>
            <button onClick={()=>login()}>Log In</button>
        </div>
    );
};

export default LoginPage;