import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button} from '@mui/material';
import SeasonRequest from "../requests/SeasonRequest";
import {useNavigate} from 'react-router-dom';
import { LOGIN_FAIL } from '../actions/types';
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';



const url="http://127.0.0.1:8000/seasons/"

const AddSeasonForm=()=>{
    const [Id,setId]=useState(0);
    const [year,setyear]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(Id,year);
        try{
            const response=await axios.post(url,{Id:Id,year:year},{'withCredentials': true });
            console.log(response);
            const request=SeasonRequest();
            console.log(request);
        }
        catch(error){
            console.log(error);
        }
    };

    return(
      <div id='add-season'>
        <h1>Add Season</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label>Id</label>
                <input type='number' className='input' id='Id' value={Id} onChange={(e)=>setId(e.target.value)}/>
            </div>
            <div className='form-row'>
                <label>Season</label>
                <input type='text' className='input' id='Id' value={year} onChange={(e)=>setyear(e.target.value)}/>        
            </div>
            <div>
            <input type="submit" value="Add"></input>
            </div>
        </form>
      </div>  
    )
}

export default AddSeasonForm;