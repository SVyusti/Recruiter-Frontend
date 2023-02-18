import React,{useState,useEffect} from 'react'
import SeasonRequest from '../requests/SeasonRequest';
import AddSeasonForm from '../Components/AddSeasonForm';
import { Button } from 'react-bootstrap';

function Dashboard() {
    const [Display,setDisplay]=useState(false)
  return (
    <div>
        <h1>Seasons</h1>
        <button onClick={()=>setDisplay(!Display)}>Add Season</button>
        {Display && <AddSeasonForm/>}
        <SeasonRequest/>
    </div>
  )
}

export default Dashboard;