import React,{useContext} from 'react';
import {createContext} from 'react';
import {Button} from '@mui/material';
import { Typography, Box } from '@mui/material';
import {redirect} from 'react-router-dom';
import {
  LOGIN_SUCCESS,LOGIN_FAIL
} from '../actions/types'
// import {UserContext} from '../../utils/hooks/UserContext';
function LoginRequest(){
    console.log("clicked");
    window.location.href="http://127.0.0.1:8000/send_oauth_token/"
}



function Login() {
  return (
    <div>
    <img src={process.env.PUBLIC_URL + "/images/omniport.png"}
     alt=""
     width='40px'></img>
    <button onClick={LoginRequest}>
        Login with Omniport
    </button>
    </div>
  );
}


export default Login