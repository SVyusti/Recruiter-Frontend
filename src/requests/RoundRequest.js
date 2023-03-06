import {useState,useEffect} from "react";
import axios from "axios";
import client from "../http-common.js"
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';

function RoundRequest(){
    const [RoundList,setRoundList]=useState([null]);
    const [PartRound,setPartRound]=useState([null]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/round/',{'withCredentials':true})
            .then(res=>{
                console.log(res.data)
                setRoundList(res.data)
                return res.data
            })
            .catch(err=>{
                console.log(err)
            })
    },[]);
    return(
        <div>
            
        </div>
    )
}

export default RoundRequest;
