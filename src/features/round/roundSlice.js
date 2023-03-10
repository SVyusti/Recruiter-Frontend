import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true


const initialState={
    loading:false,
    rounds:[],
    error:'',
}

export const fetchRounds=createAsyncThunk('round/fetchRounds',()=>{
    return axios
        .get('http://127.0.0.1:8000/round',{withCredentials:true})
        .then((response)=>response.data)
})

// export const fetchRounds=createAsyncThunk('round/fetchRounds',
//     async () => {
//         const response = await axios.get('http://127.0.0.1:8000/round',{withCredentials:true})
//         return response.data
//     }
// )



const roundSlice=createSlice({
    name:'round',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchRounds.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRounds.fulfilled,(state,action)=>{
            state.loading=false
            state.rounds=action.payload
            state.error=''
        })
        builder.addCase(fetchRounds.rejected,(state,action)=>{
            state.loading=false
            state.rounds=[]
            state.error=action.error.message
        })
    },
})

export default roundSlice.reducer
