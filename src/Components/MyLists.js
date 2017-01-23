// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link, IndexLink, hashHistory } from 'react-router'


// need this.props.children for its child routes

// whenever the user gets to MyList, we need to check all of the local storage and render the lists that are there

class LinkItem extends Component{
	reloadPage(){
		location.reload()
	}
	
	render(){
		
		var buttonNameToUse = 'View "' + this.props.buttonName + '" List'

		var linkTo = "viewList/"+this.props.buttonName;
		
		return(
			<Link to={linkTo}> <button onClick={this.reloadPage}className="btn btn-primary button-same-row"> {buttonNameToUse} </button> </Link>
		)
	}
}



class MyLists extends Component{

	render(){

		// create a links array that the will hold the various links
		var linksArray = [				
			<Link key={1} to="myLists/createNewList"> <button className="btn btn-primary button-same-row"> Create New List </button> </Link>,
			<Link key={2} to="home"> <button className="btn btn-primary button-same-row"> Generate Random List </button> </Link>,
		]
		
		// need to retrieve objects from storage and turn it back into an object
		var retrievedObject = localStorage.getItem('newList1');
		
		var newList1 = JSON.parse(retrievedObject);
		// console.log(newList1.name);


		for (var i=0; i <localStorage.length; i++){
			// dynamically create list names to match the new lists that were stored in local storage
			var listPulledFromStorage = "newList" + i 
			var retrievedObject = localStorage.getItem(listPulledFromStorage)
			var newList = JSON.parse(retrievedObject);
			//create a link with information above
			var nameOfButton = newList.name

			// give each one a button name and key number so that the console doesn't whine 
			linksArray.push(<LinkItem buttonName={nameOfButton} key={i+3} />)	
			


		}
		
		return(
			<div className="col-sm-9">
				
				{linksArray}
				{this.props.children}
			</div>


			
		)
	}
}

export default MyLists;

// <Link key={i+3} to="home"> <button className="btn btn-primary button-same-row"> {nameOfButton} </button> </Link>