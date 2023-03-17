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
    return axios
        .get(`${BASE_URL}/?S_Id=${season_id}`,{withCredentials:true})
        .then((response)=>response.data)
})

export const createRound=createAsyncThunk('round/createRound',(round_data)=>{
    console.log(round_data)
    return client
        .post('/round/',
        {
           RoundId:round_data['RoundId'],
           type:round_data['type'],
           role:round_data['role'],
           S_Id:round_data['season_id']

        }
        )
        .then((response)=>response.data)
})

export const deleteRound=createAsyncThunk('round/deleteRound',(round_id)=>{
    return client
        .delete(`/round/${round_id}`,{withCredentials:true})
        .then((response)=>response.data)
        .catch((error)=>console.log(error.message))
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
        builder.addCase(createRound.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(createRound.fulfilled,(state,action)=>{
            state.loading=false
            state.rounds=action.payload
            state.error=''
        })
        builder.addCase(createRound.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        builder.addCase(deleteRound.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(deleteRound.fulfilled,(state)=>{
            state.loading=false
        })
        builder.addCase(deleteRound.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    },
})

export default roundSlice.reducer
