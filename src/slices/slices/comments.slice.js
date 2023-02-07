import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userRequest} from "../../api/services/user.services";


const initialState ={
    posts:[],
    post:[],
    loading:false,
    error:null,
}


const getAllAsyncComments = createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectWithValue})=>{

        try {
            const {data} = await userRequest.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


const postsSlice = createSlice({
    name:'postSlice',
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
    // extraReducers:{
    //     [getAllAsync.fulfilled]:(state,action)=>{
    //         state.posts =action.payload
    //     }
    // },
    extraReducers: builder =>
        builder
            .addCase(getAllAsyncPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAllAsyncPosts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
            .addCase(getAllAsyncPosts.pending, (state, action) => {
                state.loading = true
                console.log(state.loading)
            })

});

const {reducer:postsReducer,actions:{getAll,setCurrentPost,deleteById}}=postsSlice

const postsActions ={
    getAll,
    setCurrentPost,
    deleteById,
    getAllAsyncPosts
}

export {
    postsReducer,
    postsActions
}