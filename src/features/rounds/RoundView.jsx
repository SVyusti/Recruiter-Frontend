import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchRounds } from './roundSlice'
import { CardDeck,Card, CardActions,CardContent,Button,Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import AddRound from './AddRound'

export const RoundView = () => {
  const round=useSelector((state)=>state.round)
  const seasonId=useParams()
  const dispatch=useDispatch()
  const [openAdd, setOpenAdd]=useState(false)


  useEffect(()=>{
    dispatch(fetchRounds(seasonId['season_id']))
  },[])
  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div><h1>Recruitment Season {seasonId['season_year']}</h1></div>
      <AddRound open={openAdd} setOpen={setOpenAdd}/>
      <div><button onClick={()=>setOpenAdd(true)}>Add Round</button></div>
      </div>
      {round.loading && <div>Loading...</div>}
      {!round.loading && round.error ? <div>Error: {round.error}</div> : null}
      {(!round.loading && round.rounds.length) ? (
        <div style={{display:'flex', flexDirection:'row'}}>          
              {
              round.rounds.slice(0).reverse().map(round=>{
                      return <Card sx={{ maxWidth: 345, margin:2.5 }} key={round.RoundId}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{round.role}</Typography>
                        <Typography variant="h5">{round.type}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button>View Candidates</Button>
                          <Button>View QuestionSet</Button>
                        </CardActions>
                      </Card>
                
              })
            }
        </div>
      ): null}
    </div>
  )
}
