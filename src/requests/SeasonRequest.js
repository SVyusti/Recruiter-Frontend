import React, { useEffect,useState } from 'react';
import axios from "axios";
import {Button,ButtonGroup} from 'react-bootstrap';
import httpCommon from '../http-common';
import '../styles/list.css';
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';

function SeasonRequest(){
    const [SeasonList,setSeasonList]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/seasons/',{'withCredentials':true})
            .then(res=>{
                console.log(res.data)
                setSeasonList(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        // fetchData();
    },[]);
    // const apiURL="http://127.0.0.1:8000/seasons/";
    // const fetchData=async()=>{
    //     const response = await axios.get(apiURL,
    //         {'withCredentials': true });
    //     console.log(response.data);
    //     setSeasonList(response.data);
    //     console.log(SeasonList);
    // }
    return (
        <div>
        <ButtonGroup vertical>
            {SeasonList.map(season => (
            <button className="list" key={season.Id}>{season.year}</button>
          ))}
        </ButtonGroup>
        </div>
    );
}

export default SeasonRequest;