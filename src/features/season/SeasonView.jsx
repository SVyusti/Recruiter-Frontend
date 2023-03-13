import { unwrapResult } from '@reduxjs/toolkit'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSeasons } from './seasonSlice'
import AddSeasonDialogue from './AddSeasonDialogue'
import { RiDeleteBinLine } from "react-icons/ri";
import {Table, Button, Stack, View } from 'react-bootstrap'
import DeleteSeason from './DeleteSeason'


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
        <table className = "table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            season.seasons.slice(0).reverse().map(season=>(
                    <tr key={season.Id}>
                      <td>{season.Id}</td>
                      <td><Button variant="outline-secondary">{season.year}</Button></td>
                      <td><Button variant="outline-secondary" onClick={()=>DeleteSeason(season.Id)}><RiDeleteBinLine/></Button></td>
                    </tr>
              
            ))
            }
          </tbody>
        </table>
      ): null}
    </div>
  )
}
