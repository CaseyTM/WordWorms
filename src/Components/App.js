import React, { Component } from 'react';


//bring in nav bars
import BootstrapNavBar from './BootstrapNavBar.js';
import SideNavBar from './SideNavBar.js';



// We need to bring in bootstrap as well as jquery
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import $ from 'jquery';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ""
    }
    this.handleSearch = this.handleSearch.bind(this)

  }
  handleSearch(wordToDisplay) {
    this.setState({
      searchText: wordToDisplay
    })
    this.props.router.push('/search/'+encodeURI(wordToDisplay));
    // this.setState({
    //   word: wordToDisplay
    // })
  }

  componentDidMount() {
    console.log(this.props.router);
  }

  render() {
    return (
      <div className="container-fluid">
        <BootstrapNavBar handleSearchAppFunction={this.handleSearch} />
       	<div className="row">
	        <SideNavBar />     
	        {this.props.children}           

	    </div> 
      </div>
    );
  }
}

export default App;

