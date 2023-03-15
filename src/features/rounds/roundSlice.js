import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import client from '../../http-common'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true


const initialState={
    loading:false,
    rounds:[],
    error:'',
    current_season:0,
    
}

const BASE_URL='http://127.0.0.1:8000/round'

export const fetchRounds=createAsyncThunk('round/fetchRounds',(season_id)=>{
    console.log(season_id)
    return axios
        .get(`${BASE_URL}/?S_Id=${season_id}`,{withCredentials:true})
        .then((response)=>response.data)
})

export const createRound=createAsyncThunk('round/fetchRounds',(round_data)=>{
    return client
        .post('/round/',
        {
           type:round_data['type'],
           role:round_data['role'],
           S_Id:round_data['season_id']

        }
        )
        .then((response)=>response.data)
})



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
