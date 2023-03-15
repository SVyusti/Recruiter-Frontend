import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchRounds } from './roundSlice'
import { CardDeck,Card, CardActions,CardContent,Button,Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'

export const RoundView = () => {
  const round=useSelector((state)=>state.round)
  const seasonId=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRounds(seasonId['season_id']))
  },[])
  console.log(round.rounds)
  return (
    <div>
      <h1>Recruitment Season {seasonId['season_year']}</h1>
      {round.loading && <div>Loading...</div>}
      {!round.loading && round.error ? <div>Error: {round.error}</div> : null}
      {(!round.loading && round.rounds.length) ? (
        <div>          
              {
              round.rounds.slice(0).reverse().map(round=>{
                      return <Card sx={{ maxWidth: 345 }} key={round.RoundId}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{round.role}</Typography>
                        <Typography>{round.type}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button>View Candidates</Button>
                          <Button>Vies QuestionSet</Button>
                        </CardActions>
                      </Card>
                
              })
            }
        </div>
      ): null}
    </div>
  )
}
