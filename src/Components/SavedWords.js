// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'


// need this.props.children for its child routes
class SavedWords extends Component{
	render(){
		return(
			<div className="col-sm-9">
				Your words have been saved!
			</div>


			
		)
	}
}

export default SavedWords;