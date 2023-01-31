import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "../hooks/UseAuthContext/UserAuthContext";
import {RouterEndpoints} from "../routes/routes";

const RequireAuth = ({children}) => {

    const location = useLocation()
    const {user}=useAuthContext();
    console.log(user);

    if (!user){

        return <Navigate to={'/login'} state={location}/>
    }


    return children
};

export default RequireAuth;