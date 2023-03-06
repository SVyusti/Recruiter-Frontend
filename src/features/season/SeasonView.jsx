import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSeasons } from './seasonSlice'

export const SeasonView = () => {
  const season=useSelector((state)=>state.season)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchSeasons())
  },[dispatch])
  return (
    <div>
      <h1>SeasonList</h1>
      {season.loading && <div>Loading...</div>}
      {!season.loading && season.error ? <div>Error: {season.error}</div> : null}
      {!season.loading && season.seasons.length ? (
        <ul>
          {
          season.seasons.map(season=>(
            <li key={season.Id}>{season.year}</li>
          ))
          }
        </ul>
      ): null}
    </div>
  )
}
