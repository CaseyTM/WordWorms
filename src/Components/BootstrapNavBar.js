// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';


class BootstrapNavBar extends Component{
	constructor(props){
		super(props);
	{/*need to give handlesearchsumit access to bootstrapNav bar's props*/}
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}
	handleSearchSubmit(event){
		event.preventDefault();
		var userInput = event.target[0].value;

		//create a url for the JSON Request

		// need to pass word to app.js and give it userInput
		this.props.handleSearchAppFunction(userInput)
	}


	render(){
		return(

			<div className="row">
				<div className="col-sm-12">
					<nav className="navbar navbar-default ww-nav">
						{/*<img src="http://www.clipartkid.com/images/8/cute-bookworm-svg-cut-file-cute-bookworm-clipart-free-svgs-free-svg-LMlbUC-clipart.png" />*/}
						<div className="searchWord col-sm-2 col-md-6 col-lg-8 nav-fix">WordWorms</div>


						<form onSubmit={this.handleSearchSubmit} className="navbar-right col-sm-10 col-md-6 col-lg-4 form-inline">
							<div className="form-group">
								<div className="input-group">
									<div className="input-group-addon">Learn Something!</div>
									<input className="form-control" placeholder="Search For A Word" type="text" />
								</div>
							</div>

							<button type="submit" className="btn btn-primary"> Submit </button>
						</form>


					</nav>
				</div>
			</div>

		)
	}
}

export default BootstrapNavBar;
