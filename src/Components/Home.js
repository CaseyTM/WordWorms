// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import WordOfTheDay from './WordOfTheDay.js'
import RandomQuote from './RandomQuote.js';
import Etymology from './Etymology.js';


class Home extends Component{
	render(){
		return(
			<div className="col-sm-9">
				<WordOfTheDay />
				<Etymology />
				<RandomQuote />

			</div>
			
		)
	}
}

export default Home;