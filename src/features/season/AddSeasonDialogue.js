import React,{useState,useEffect} from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {createSeasons} from "../season/seasonSlice"
import TextField from "@mui/material/TextField";

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
                        id="Id"
                        label="Id"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleId}
                        value={newId}
                    />
                    <TextField
                        autoFocus
                        id="Id"
                        label="year"
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={handleYear}
                    />
                    {/* <form>
                        <label>Id:
                            <input type="int" id='Id' value={newId} onChange={handleId}></input>
                        </label>
                        <label>year:
                            <input type="text" name="year" onChange={handleYear}></input>
                        </label>
                    </form> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd}>Add</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddSeasonDialogue