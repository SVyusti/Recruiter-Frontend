import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button} from '@mui/material';
import SeasonRequest from "../requests/SeasonRequest";
import {useNavigate} from 'react-router-dom';
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';



const url="http://127.0.0.1:8000/seasons/"

const AddSeasonForm=()=>{
    const [Id,setId]=useState(null);
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
      <div id='add_season'>
        <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <div>
                <label>Id</label>
                </div>
                <div>
                <input type='number' className='input' id='Id' value={Id} onChange={(e)=>setId(e.target.value)}/>
                </div>
            </div>
            <div className='form-row'>
                <div>
                <label>Season</label>
                </div>
                <div>
                <input type='text' className='input' id='Id' value={year} onChange={(e)=>setyear(e.target.value)}/>   
                </div>     
            </div>
            <div>
            <input type="submit" value="Submit"></input>
            </div>
        </form>
        </div>
      </div>  
    )
}

export default AddSeasonForm;