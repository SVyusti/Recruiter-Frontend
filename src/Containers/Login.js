import React,{useContext} from 'react';
import {createContext} from 'react';
import {Button} from 'react-bootstrap';
import { Typography, Box } from '@mui/material';
import {redirect} from 'react-router-dom';
// import {UserContext} from '../../utils/hooks/UserContext';
function LoginRequest(){
    console.log("clicked");
    window.location.href="http://127.0.0.1:8000/send_oauth_token/"
}



function Login() {
  return (
    <div className="login">
    <img src={process.env.PUBLIC_URL + "/images/omniport.png"}
     alt=""
     width='40px'></img>
    <Button variant="light" onClick={LoginRequest}>
        Login with omniport
    </Button>
    </div>
  );
}


export default Login