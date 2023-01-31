import React, {useEffect, useState} from 'react';
import {userRequest} from "../../api/services/user.services";
import Comments from "../../components/Comments/Comments";
import {commentsRequest} from "../../api/services/comments.service";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {

    const [comments,setComments]=useState([])

    useEffect(()=>{
        commentsRequest.getAll().then(({data})=>setComments([...data]))

    },[])

    return (
        <div>
           <Comments comments={comments}/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;