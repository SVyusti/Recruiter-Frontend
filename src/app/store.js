import { configureStore } from '@reduxjs/toolkit'
import seasonReducer from '../features/season/seasonSlice'

const store=configureStore({
    reducer:{
        season:seasonReducer
    }
})

export default store