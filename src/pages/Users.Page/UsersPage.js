import React, {useEffect} from 'react';
import Users from "../../components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../slices/slices/users.slices";

const UsersPage = () => {

    const dispatch = useDispatch()
    const {users}=useSelector(state => state.userReducer)




    useEffect(()=>{

        dispatch(userActions.getAllAsync())

    },[])

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;