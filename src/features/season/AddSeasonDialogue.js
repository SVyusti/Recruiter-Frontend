import React,{useState,useEffect} from "react";
import {TextField,Button,Dialog,DialogContent,DialogTitle,DialogActions} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {createSeasons} from "../season/seasonSlice"

function AddSeasonDialogue(props){
    const season=useSelector((state)=>state.season)
    const dispatch=useDispatch()
    const {open, setOpen} = props;
    const [newId, setId] = useState(null);
    const [newYear, setYear] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    const handleId=(e)=>{
        setId(parseInt(e.target.value))
    }
    const handleYear=(e)=>{
        setYear(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(
            createSeasons({Id:newId,year:newYear})
        )
    }
    return(
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <div>Add Season</div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="outlined-basic"
                        label="Id"
                        type="number"
                        fullWidth
                        variant="outlined"
                        onChange={handleId}
                        value={newId}
                        sx={{mt:2}}
                        
                    />
                    <TextField
                        autoFocus
                        id="outlined-basic"
                        label="year"
                        type="string"
                        fullWidth
                        variant="outlined"
                        onChange={handleYear}
                        sx={{mt:2}}
                    />
                </DialogContent>
                <DialogActions>
                    
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleAdd}>Add</Button>
                    
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddSeasonDialogue