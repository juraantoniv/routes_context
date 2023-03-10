import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "../hooks/UseAuthContext/UserAuthContext";


const RequireAuth = ({children}) => {

    const location = useLocation()
    const {user}=useAuthContext();


    if (!user){

        return <Navigate to={'/login'} state={location}/>
    }


    return children
};

export default RequireAuth;