import React, { Component } from 'react';
import './App.css';

//bring in nav bars
import BootstrapNavBar from './BootstrapNavBar.js';
import SideNavBar from './SideNavBar.js';
import Etymology from './Etymology.js';
import WordOfTheDay from './WordOfTheDay.js';
import RandomQuote from './RandomQuote.js';

// We need to bring in bootstrap as well as jquery
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
		<div className="container-fluid">
			<BootstrapNavBar />
			<div className="row">
				<SideNavBar />
				<WordOfTheDay />
				<RandomQuote />
				<Etymology />
			</div>
		</div>
    );
  }
}

export default App;
