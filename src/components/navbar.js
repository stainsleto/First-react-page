import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'
import logo from '../images/react-logo.png'


function NavBar(){
  return( 
    <div className="nav-section">
      <div className="left-section">
        <img id="logo" src={logo} width="40px" height="40px" />
        <h2 id="logo-text">ReactFacts</h2>
      </div>
      <div className="right-section">
        <h3 id="right-text">React Course - Project 1</h3>
      </div>
    </div>
  )
}
 
export default NavBar;
