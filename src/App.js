// import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import './Components/News'

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  name="Piyush";
  render() {
    return (
      <>
      <div>
      
        {/* Hello my first class based Component {this.name} */}
        <Navbar></Navbar>
        <News></News>
      </div>
      </>
    )
  }
}
