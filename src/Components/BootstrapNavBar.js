// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link } from 'react-router';


class BootstrapNavBar extends Component{
	render(){
		return(
			
			<div className="row">
				<div className="col-sm-12">			
					<nav className="navbar navbar-default">
						<img src="http://www.clipartkid.com/images/8/cute-bookworm-svg-cut-file-cute-bookworm-clipart-free-svgs-free-svg-LMlbUC-clipart.png" />


						<form className="navbar-right col-sm-4 form-inline">
							<div className="form-group">
								<div className="input-group">
									<div className="input-group-addon">Search</div>
									<input className="form-control" placeholder="Search For A Word" type="text" />
								</div>
							</div>

							<button className="btn btn-primary"> Submit </button>
						</form>


					</nav>
				</div>
			</div>
			
		)
	}
}

export default BootstrapNavBar;