import {useState,useEffect} from "react";
import axios from "axios";
import httpCommon from "../http-common";
import { useState } from "react";
axios.defaults.withCredentials=true;
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';

function UserRequest(){
    const [UserList,setUserList]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const apiURL="http://127.0.0.1:8000/users/";
    const fetchData=async()=>{
       const response=await axios.get(apiURL,{'withCredentials':true});
       console.log(response);
       setUserList(response.data);
       console.log(response.data);

    }
    return response.data;

}
export default UserRequest;