// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'


// need this.props.children for its child routes

// whenever the user gets to MyList, we need to check all of the local storage and render the lists that are there
class MyLists extends Component{
	render(){
		var retrievedObject = localStorage.getItem('newList1');
		
		var newList1 = JSON.parse(retrievedObject);
		console.log(newList1.name);

		var linksArray = [
			<Link to="home"> <button>{newList1.name}</button> </Link>	
		]
		return(
			<div className="col-sm-9">
				<Link to="myLists/createNewList"> <button className="btn btn-primary button-same-row"> Create New List </button> </Link>
				<Link to="home"> <button className="btn btn-primary button-same-row"> Generate Random List </button> </Link>
				<Link to="home"> <button className="btn btn-primary button-same-row"> List1 </button> </Link>	
				{linksArray}
				{this.props.children}
			</div>


			
		)
	}
}

export default MyLists;