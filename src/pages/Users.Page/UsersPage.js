import React, {useEffect, useState} from 'react';
import Users from "../../components/Users/Users";
import {userRequest} from "../../api/services/user.services";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../slices/slices/Users.slices";

const UsersPage = () => {

    const dispatch = useDispatch()
    const {users}=useSelector(state => state.userReducer)




    useEffect(()=>{

        userRequest.getAll().then(({data})=>dispatch(userActions.getAllAsync(data)))


    },[])

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;