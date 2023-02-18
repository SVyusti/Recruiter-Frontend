import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';


function Home() {
  return (
    <div className='container'>
        <div className='mt-5 p-5 bg-light'>
            <h1 className='display-4'>Welcome to Recruiter</h1>
            <p className='lead'></p>
            <hr className='my-4'></hr>
            <Login/>
        </div>
    </div>
  )
}

export default Home