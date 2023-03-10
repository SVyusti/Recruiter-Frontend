import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchRounds } from './roundSlice'

export const RoundView = () => {
  const round=useSelector((state)=>state.round)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRounds())
  },[])
  return (
    <div>
      <h1>RoundList</h1>
      {round.loading && <div>Loading...</div>}
      {!round.loading && round.error ? <div>Error: {round.error}</div> : null}
      {!round.loading && round.rounds.length ? (
        <ul>
          {
          round.rounds.map(round=>(
            <ul key={round.RoundId}>
            <li>{round.type}</li>
            <li>{round.role}</li>
            <li>{round.S_Id}</li>
            </ul>
          ))
          }
        </ul>
      ): null}
    </div>
  )
}
