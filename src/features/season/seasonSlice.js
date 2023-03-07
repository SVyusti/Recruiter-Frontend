import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true


const initialState={
    loading:false,
    seasons:[],
    error:'',
}

// export const fetchSeasons=createAsyncThunk('season/fetchSeasons',()=>{
//     return axios
//         .get('http://127.0.0.1:8000/seasons',{withCredentials:true})
//         .then((response)=>response.data)
// })

export const fetchSeasons=createAsyncThunk('season/fetchSeasons',
    async () => {
        const response = await axios.get(`http://127.0.0.1:8000/seasons`,{headers:{"Access-Control-Allow-Origin":"*"}},{withCredentials:true})
        return response.data
    }
)



const seasonSlice=createSlice({
    name:'season',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchSeasons.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchSeasons.fulfilled,(state,action)=>{
            state.loading=false
            state.seasons=action.payload
            state.error=''
        })
        builder.addCase(fetchSeasons.rejected,(state,action)=>{
            state.loading=false
            state.seasons=[]
            state.error=action.error.message
        })
    },
})

export default seasonSlice.reducer
