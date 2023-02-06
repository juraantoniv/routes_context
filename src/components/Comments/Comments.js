import React from 'react';
import {useNavigate} from "react-router-dom";

const Comments = ({comments=[]}) => {

    const navigate = useNavigate()

    return (
        <div style={{
            display:
                'flex',
            flexDirection: 'column',
            gap: 10,
        }}>
            {comments.filter(({id})=>id<10).map(item => {
                const {id,name, email} = item;
                return (
                    <div
                        key={id}
                        style={{
                            background: 'lightgrey'
                        }}>
                        <div>ID: {id}</div>
                        <div>UserID: {name}</div>
                        <div>Title: {email}</div>
                        <button onClick={()=>navigate(id.toString())}>Get Post</button>
                    </div>

                )
            })}
        </div>
    );
};

export default Comments;