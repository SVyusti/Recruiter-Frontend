import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Button, Dialog,DialogActions,DialogTitle } from '@mui/material';
import { deleteSeason } from './seasonSlice';
import { AiOutlineClose } from "react-icons/ai";


export default function DeleteSeason(props){
    const season=useSelector((state)=>state.season)
    const dispatch=useDispatch()
    const {open, setOpen,deleteId,setDeleteId} = props;
    const handleConfirmDelete=()=>{
        console.log(deleteId)
        dispatch(deleteSeason(deleteId))
    }
    const handleClose = () => {
        setOpen(false);
        setDeleteId(0)
        window.location.reload(false);
        
    };
    return(
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <div>Delete Season
                        <button onClick={handleClose}><AiOutlineClose/></button>
                    </div>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleConfirmDelete}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>

        </div>
    )

}
