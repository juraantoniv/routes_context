import {createContext, useState} from "react";

import React from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    
        const logIn = (logUser) => {
          setUser(logUser)
        }

        const logOut = () => {
          setUser(null)
        }

        const value ={user,logIn,logOut}

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export {
   AuthProvider,AuthContext

}