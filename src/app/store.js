import { configureStore } from '@reduxjs/toolkit'
import seasonReducer from '../features/season/seasonSlice'
import roundReducer from '../features/rounds/roundSlice'

const store=configureStore({
    reducer:{
        season:seasonReducer,
        round:roundReducer
    }
})

export default store