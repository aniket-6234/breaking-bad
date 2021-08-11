import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import NavBar from './components/NavBar'
import Home from './components/Home'



const App = () => {


  return (
    <Router>
    <>
      <NavBar />

        <Switch>

           <Home />

        </Switch>
  
    </>
    </Router>

  );
}

export default App;
