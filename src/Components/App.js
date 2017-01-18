import React, { Component } from 'react';


//bring in nav bars
import BootstrapNavBar from './BootstrapNavBar.js';
import SideNavBar from './SideNavBar.js';



// We need to bring in bootstrap as well as jquery
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BootstrapNavBar />
       	<div className="row">
	        <SideNavBar />     
	        {this.props.children}  
	    </div> 
      </div>
    );
  }
}

export default App;

