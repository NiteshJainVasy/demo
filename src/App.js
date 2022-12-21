import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";

import About from "./components/About";

import ContactUs from "./components/ContactUs";

function App() {
  
  return (

    <Router>
    <Switch>
   
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />
    <Redirect to="/" /> 
   

 
    </Switch>
      </Router>
  );
}

export default App;
