import React, {useEffect, useState} from 'react';

import {todosRequest} from "../../api/services/todos.service";
import Todos from "../../components/Todos/Todos";

const TodosPage = () => {


    const [todos,setTodos]=useState([])


    useEffect(()=>{
        todosRequest.getAll().then(({data})=>setTodos([...data]))

    },[])
    return (
        <div>
            <Todos todos={todos}/>
        </div>
    );
};

export default TodosPage;