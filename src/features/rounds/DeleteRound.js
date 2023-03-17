import { Button,AlertTitle,Alert, Box, Collapse, Dialog, DialogActions,DialogContent,DialogTitle} from '@mui/material'
import React, { useState,useEffect } from 'react'
import { deleteRound } from './roundSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai";

export default function DeleteRound(props) {

    const round=useSelector((state)=>state.round)
    const {open,setOpen,deleteRoundId,setDeleteRoundId}=props;
    const dispatch=useDispatch()

    const handleClose = () => {
        setOpen(false);
        setDeleteRoundId(0)
        window.location.reload(false);

    };

    const handleDelete=()=>{
        console.log(deleteRoundId)
        dispatch(deleteRound(parseInt(deleteRoundId)))
    }

  return (
        // <Alert open={open}>
        //     <Alert.Heading>
        //         Confirm!!
        //     </Alert.Heading>
        //     <p>
        //         This round will be deleted permanentaly
        //     </p>
        //     <div>
        //         <Button onClick={handleClose}>Close</Button>
        //         <Button onClick={handleDelete}>Confirm</Button>
        //     </div>
        // </Alert>
        <div>
            <Dialog open={open}>
                <DialogTitle sx={{width:'100%'}}>
                    <div style={{display:'flex',}}>
                    <div>Confirm Delete</div>
                    <div><button onClick={handleClose}><AiOutlineClose/></button></div>
                    </div>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>

        </div>
        // <Box>
        //     <Collapse in={open}>
        //         <Alert
        //             action={
        //                 <div>
        //                 <Button onClick={handleClose}>
        //                     NO
        //                 </Button>
        //                 <Button onClick={handleDelete}>
        //                     Yes
        //                 </Button>
        //                 </div>
        //             }
        //         >

        //         </Alert>
        //     </Collapse>
        // </Box>
  )
}

