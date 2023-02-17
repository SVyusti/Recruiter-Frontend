import React, { useEffect,useState } from 'react';
import axios from "axios";
import httpCommon from '../http-common';
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';

function SeasonRequest(){
    const [SeasonList,setSeasonList]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    useEffect(()=>{
        fetchData();
    },[]);
    const apiURL="http://127.0.0.1:8000/seasons/";
    const fetchData=async()=>{
        const response = await axios.get(apiURL,
            {'withCredentials': true });
        console.log(response)
        setSeasonList(response.data);
        return response.data;
    }
    

    // return (
    //     // <div>
    //     //     <h1>Seasons</h1>
    //     //     <div>
    //     //         {SeasonList.map((season, index) => (
    //     //             <ul>
    //     //                 <li>id: {season.Id}</li>
    //     //                 <li>year: {season.year}</li>
    //     //             </ul>
    //     //         ))}
    //     //     </div>
    //     // </div>
    // );
}

export default SeasonRequest;