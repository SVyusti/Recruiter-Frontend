import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function LoginRequest(){
    console.log("clicked");
    window.location.href="http://localhost:8000/send_oauth_token/"
}

function Login() {
  return (
    <div>
    <img src={process.env.PUBLIC_URL + "/images/omniport.png"}
     alt=""
     width='40px'></img>
    <button onClick={LoginRequest} type="button" className="btn btn-info">
        Login with Omniport
    </button>
    </div>
  );
}

export default Login
