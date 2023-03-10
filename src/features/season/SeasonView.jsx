import { unwrapResult } from '@reduxjs/toolkit'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSeasons } from './seasonSlice'
import AddSeasonDialogue from './AddSeasonDialogue'
import { RiDeleteBinLine } from "react-icons/ri";


export const SeasonView = () => {
  
  const season=useSelector((state)=>state.season)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchSeasons())
  },[])
  const [open,setOpen]=useState(false)
  return (
    <div>
      <h1>SeasonList</h1>
      <AddSeasonDialogue open={open} setOpen={setOpen} />
      <button onClick={()=>setOpen(true)}>Add Season</button>
      {season.loading && <div>Loading...</div>}
      {!season.loading && season.error ? <div>Error: {season.error}</div> : null}
      {(!season.loading && season.seasons.length) ? (
        <ul>
          {
          season.seasons.slice(0).reverse().map(season=>(
            <li key={season.Id}>{season.year}</li>
          ))
          }
        </ul>
      ): null}
    </div>
  )
}
