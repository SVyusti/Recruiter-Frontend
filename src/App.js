
import './App.css';
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
import { RoundView } from './features/rounds/RoundView';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="dashboard/" element={<Dashboard/>}/>
            <Route path="login/" element={<Login/>} />
            <Route path="SeasonReq/" element={<SeasonRequest/>} />
            <Route path="RoundReq/" element={<RoundRequest/>} />
            <Route path="Season/" element={<SeasonView/>} />
            <Route path="Season/:season_id/:season_year" element={<RoundView/>} />
          </Routes>
        </BrowserRouter>
      
    )
  }
}

export default App

