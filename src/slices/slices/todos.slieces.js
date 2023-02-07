import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {todosRequest} from "../../api/services/todos.service";


const initialState ={
    comments:[],
    loading:false,
    error:null,
}


const getAllAsyncComments= createAsyncThunk(
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
            .addCase(getAllAsyncComments.fulfilled, (state, action) => {
                state.comments = action.payload
                state.loading = false
            })
            .addCase(getAllAsyncComments.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
            .addCase(getAllAsyncComments.pending, (state, action) => {
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
    commentsReducer,
    commentsActions
}