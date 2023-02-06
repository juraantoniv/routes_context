import React, {useEffect, useState} from 'react';
import Users from "../../components/Users/Users";
import {userRequest} from "../../api/services/user.services";

const UsersPage = () => {

    const [users,setUsers]=useState([])


    useEffect(()=>{
        userRequest.getAll().then(({data})=>setUsers([...data]))

    },[])

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;