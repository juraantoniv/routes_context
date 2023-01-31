import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsRequest} from "../../api/services/comments.service";

const Posts = () => {

    const [posts,setPosts]=useState(null)
    const {postId} = useParams()

    useEffect(()=>{
        commentsRequest.getByID(postId).then(({data})=>setPosts(data))

    },[postId])


    console.log(postId);

    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    );
};

export default Posts;