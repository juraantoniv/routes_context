import React from 'react';
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/UseAuthContext/UserAuthContext";

const Header = () => {
    const {logOut,user}=useAuthContext();
    return (
        <div>
            <div>
                <NavLink to={'todos'}>Todos</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <button disabled={!user} onClick={()=>logOut()}>logOut</button>
            </div>
        </div>
    );
};

export default Header;