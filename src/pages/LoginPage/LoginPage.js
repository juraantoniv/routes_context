import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks/UseAuthContext/UserAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {logIn,logOut}=useAuthContext();
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
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={()=>login()}>Login</button>
        </div>
    );
};

export default LoginPage;