

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
const Home = () => {
	const  [data, setData] = useState(false);
	const [showText, setShowText] = useState(false);
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		<Link to="/">Home</Link>
		</li>
		<li>
		<Link to="/about">About</Link>
		</li>
		<li>
		<Link to="/contactus">Contact Us</Link>
		</li>
	</ul>
	<div className="App">
      <header className="App-header">
      {data ? <img src={logo} className="App-logo" alt="logo" />  : <p> REACT</p> }  
      { showText && <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>}
       
        <button  onClick = {()=> setData(!data)}> Click ME </button>
        <button  onClick = {()=> setShowText(true)}> Text </button>
      </header>
    </div>
	</div>
);
};

export default Home;
