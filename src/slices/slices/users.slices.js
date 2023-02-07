import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userRequest} from "../../api/services/user.services";


const initialState ={
    users:[],
    post:[],
    loading:false,
    error:null,
}


const getAllAsync = createAsyncThunk(
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


const userSlice = createSlice({
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
            .addCase(getAllAsync.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = false
            })
            .addCase(getAllAsync.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
            .addCase(getAllAsync.pending, (state, action) => {
                state.loading = true
                console.log(state.loading)
            })

});

const {reducer:userReducer,actions:{getAll,setCurrentPost,deleteById}}=userSlice

const userActions ={
    getAll,
    setCurrentPost,
    deleteById,
    getAllAsync
}

export {
    userReducer,
    userActions
}