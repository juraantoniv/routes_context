import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {todosRequest} from "../../api/services/todos.service";


const initialState ={
    todos:[],
    loading:false,
    error:null,
}


const getAllAsyncTodos = createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectWithValue})=>{

        try {
            const {data} = await todosRequest.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


const todosSlice = createSlice({
    name:'todosSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        // setCurrentPost: (state, action) => {
        //     state.post = action.payload
        // },
        // deleteById: (state, action) => {
        //     const index = state.posts.findIndex(post => post.id === action.payload);
        //     state.posts.splice(index, 1)
        //     console.log(current(state.posts));
        // }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllAsyncTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.loading = false
            })
            .addCase(getAllAsyncTodos.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
            .addCase(getAllAsyncTodos.pending, (state, action) => {
                state.loading = true
                console.log(state.loading)
            })

});

const {reducer:commentsReducer,actions:{getAll,setCurrentPost,deleteById}}=todosSlice

const commentsActions ={
    getAll,
    setCurrentPost,
    deleteById,
    getAllAsyncTodos
}

export {
    todosReducer,
    todosActions
}