import React,{useState,useEffect} from "react";
import {DialogActions,DialogContent,DialogTitle,Dialog,Button} from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import {editSeason} from "../season/seasonSlice"
import TextField from "@mui/material/TextField";
import { AiOutlineClose } from "react-icons/ai";

function EditSeasonDialogue(props){
    const season=useSelector((state)=>state.season)
    const dispatch=useDispatch()
    const {open, setOpen,editId,setEditId} = props;
    const [editYear, setEditYear] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleYear=(e)=>{
        setEditYear(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(
            editSeason({Id:editId,year:editYear})
        )
    }

    const handleClose = () => {
        setOpen(false);
        setEditId(0)
        window.location.reload(false);
        
    };
    return(
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <div>Edit Season
                        <button onClick={handleClose}><AiOutlineClose/></button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="Id"
                        label="year"
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={handleYear}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd}>Edit</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditSeasonDialogue