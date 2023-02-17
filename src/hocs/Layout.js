import React,{Fragment} from 'react';
import Navbar from '../Components/Navbar';

const layout=({children})=>{
    <Fragment>
        <Navbar/>
        {children}
    </Fragment>
};

export default layout;