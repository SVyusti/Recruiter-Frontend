import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { deleteSeason } from "./seasonSlice";
import { Alert, Button } from '@mui/material';

export default function DeleteSeason(props){
    const season=useSelector((state)=>state.season)
    const dispatch=useDispatch()
    const [open, setOpen] = useState(true);
    const  {deleteId}=props
    const handleConfirmDelete=(id)=>{
        dispatch(deleteSeason({id}))
    }
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    return(
        <div>
            <Alert action={
                <div>
                <Button onClick={()=>handleConfirmDelete(deleteId)}>Yes</Button>
                <Button onClick={handleClose}>No</Button>
                </div>
            }>Confirm!!</Alert>

        </div>
    )

}
