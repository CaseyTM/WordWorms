// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link } from 'react-router';


class SideNavBar extends Component{
	render(){
		return (
			<div className="col-sm-3">
				<nav className="navbar navbar-default stretch-height">
					<ul className="sideNavMenu">
						<li>Thing 1</li>
						<li>Thing 2</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default SideNavBar;