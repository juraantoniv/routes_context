import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/users.slices";
import {todosReducer} from "./slices/todos.slieces";


const rootReducer =combineReducers({
    userReducer,
    todosReducer
})

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}