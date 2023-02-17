import React from 'react';
import {Link} from 'react-router-dom';

function Dashboard() {
  return (
    <div className='container'>
        <div className='mt-5 p-5 bg-light'>
            <h1 className='display-4'>Welcome to Recruiter</h1>
            <p className='lead'></p>
            <hr className='my-4'></hr>
            <p>Click to log in</p>
            <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default Dashboard