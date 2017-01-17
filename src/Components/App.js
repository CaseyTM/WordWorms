import React, { Component } from 'react';
import './App.css';

//bring in nav bars
import BootstrapNavBar from './BootstrapNavBar.js';
import SideNavBar from './SideNavBar.js';

// We need to bring in bootstrap as well as jquery
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BootstrapNavBar />
        <SideNavBar />
        <h1>Test</h1> 
      </div>
    );
  }
}

export default App;
