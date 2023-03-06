
import './App.css';
import axios from "axios";
import React, { Component } from 'react';
import Login from './Containers/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddSeasonForm from './Components/AddSeasonForm';
import Layout from './hocs/Layout';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import SeasonRequest from './requests/SeasonRequest';
import Dashboard from './Containers/Dashboard';
import RoundRequest from './requests/RoundRequest';
import { SeasonView } from './features/season/SeasonView';

// class App extends Component {
//   render() {
//     return (
//         // <BrowserRouter>
//         //   <Routes>
//         //     <Route path="/" element={<Home/>}/>
//         //     <Route path="dashboard/" element={<Dashboard/>}/>
//         //     <Route path="login/" element={<Login/>} />
//         //     <Route path="Season/" element={<AddSeasonForm/>} />
//         //     <Route path="SeasonReq/" element={<SeasonRequest/>} />
//         //     <Route path="RoundReq/" element={<RoundRequest/>} />
//         //   </Routes>
//         // </BrowserRouter>
      
//     )
//   }
// }

class App extends Component {
  render() {
    return (
        <div>
          <SeasonView/>
        </div>      
    )
  }
}

export default App

