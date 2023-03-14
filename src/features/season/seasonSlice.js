import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import client from '../../http-common'
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';


const BASE_URL='http://127.0.0.1:8000/seasons'

const initialState={
    loading:false,
    seasons:[],
    error:'',
    open:false
}


export const fetchSeasons=createAsyncThunk('season/fetchSeasons',()=>{
    return axios
        .get(BASE_URL,{withCredentials:true})
        .then((response)=>response.data)
})

export const createSeasons=createAsyncThunk('season/createSeason',(seasonData)=>{
    console.log(seasonData['Id'])
    return client
        .post("/seasons/",
        {
            Id: seasonData['Id'],
            year:seasonData['year']
        },
        {
            withCredentials:true
        })
        .then((response)=>response.data)
    
})

export const deleteSeason=createAsyncThunk('season/deleteSeason',(Id)=>{
    console.log(Id)
    return client
        .delete(`/seasons/${Id}`,{withCredentials:true})
        .then((response)=>response.data)
        .catch((error)=>console.log(error.message))
})




const seasonSlice=createSlice({
    name:'season',
    initialState,
    // reducers:{
    //     deleteSeason(state,action){

    //     }
    // },
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
        builder.addCase(createSeasons.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(createSeasons.fulfilled,(state,action)=>{
            state.loading=false
            state.seasons=action.payload
            state.error=''
        })
        builder.addCase(createSeasons.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        builder.addCase(deleteSeason.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(deleteSeason.fulfilled,(state)=>{
            state.loading=false
        })
        builder.addCase(deleteSeason.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

    },
})

export default seasonSlice.reducer
// export const {deleteSeason}=seasonSlice.actions;
