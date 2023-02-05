import React from 'react';

const Todos = ({todos}) => {
    return (
        <div>

            {todos.map(todo=>{
                const {id,title,completed} = todo
                return (
                    <div
                        key={id}
                        style={{
                            background: 'lightgrey'
                        }}>
                        <div>ID: {id}</div>
                        <div>UserID: {completed}</div>
                        <div>Title: {title}</div>
                    </div>
                )

            })}

        </div>
    );
};

export default Todos;