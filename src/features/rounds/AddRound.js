import React,{useState,useEffect} from 'react'
import { createRound } from './roundSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@emotion/react'
import { FormControl,Menu,MenuItem,DialogActions,Dialog,DialogTitle,DialogContent,TextField,Button,Me, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useParams } from 'react-router-dom'

function AddRound(props) {
    const options=[
        'developer',
        'designer'
    ]
    const {open,setOpen}=props
    const seasonId=useParams()
    const [type,setType]=useState('')
    const [role,setRole]=useState('')
    const [roundId,setRoundId]=useState(null)
    const theme= useTheme()
    const dispatch=useDispatch()


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    const handleRoundId=(e)=>{
        setRoundId(parseInt(e.target.value))
    }
    const handleType=(e)=>{
        setType(e.target.value)
    }
    const handleRole=(e)=>{
        setRole(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(
            createRound({RoundId:roundId,type:type,role:role,S_Id:parseInt(seasonId['season_id'])})
        )
    }

  return (
    <div>
        <Dialog open={open} onClose={handleClose}>

           <DialogTitle>Add Round</DialogTitle> 

           <DialogContent>
              <FormControl>
              <TextField id="outlined-basic" variant="outlined" label="Season" value={seasonId['season_year']} sx={{mt:2}}></TextField>  
              <TextField id="outlined-basic" variant="outlined" label="Round Id" sx={{mt:2}} onChange={handleRoundId}></TextField> 
              <TextField id="outlined-basic" variant="outlined" label="Type" sx={{mt:2}} onChange={handleType}></TextField>  
                <FormLabel sx={{mt:2}}>Role</FormLabel>
                <RadioGroup onChange={handleRole}>
                    <FormControlLabel value="developer" control={<Radio/>} label="Developer"></FormControlLabel>
                    <FormControlLabel value="designer" control={<Radio/>} label="Designer"></FormControlLabel>
                </RadioGroup>
              </FormControl>
           </DialogContent>

           <DialogActions>

                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleAdd}>Add</Button>
                
           </DialogActions>
        </Dialog>
    </div>
  )
}

export default AddRound