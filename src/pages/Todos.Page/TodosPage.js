import React, {useEffect} from 'react';


import Todos from "../../components/Todos/Todos";
import {useDispatch, useSelector} from "react-redux";
import {todosActions} from "../../slices/slices/todos.slieces";

const TodosPage = () => {


    const dispatch = useDispatch()
    const {todos}=useSelector(state => state.todosReducer)


    useEffect(()=>{

        dispatch(todosActions.getAllAsyncTodos())

    },[])

    return (
        <div>
            <Todos todos={todos}/>
        </div>
    );
};

export default TodosPage;