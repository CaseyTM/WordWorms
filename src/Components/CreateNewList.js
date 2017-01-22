// We need Component
// We also need the link so that we can actively change routes

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
// create an array with teh list of user inputtedwords!

var newlists = []
var newListNumber = 0; 

class CreateNewList extends Component{

	createList(event){

		var userInputtedWords = []
		var listName = []
		event.preventDefault();
		//map through event.target and create an array which holds user's inputs
		var listOfInputLines = event.target
		for (var i=0; i < 10; i++){
			userInputtedWords.push(listOfInputLines[i].value)
		}

		listName.push(listOfInputLines[10].value)
		// listOfInputLines.map((inputBox, index) =>{
		// 	console.log(inputBox);
		// })

		//create an object that has the name of the button and the contents of the list in an array



		var newList = {
			name: listName[0],
			tenWordsInArray: userInputtedWords
		}
	

		//clear input fields after object has been generated 
		for (var i=0; i < 11; i++){
			listOfInputLines[i].value = ""
		}

		// need to give the computer a way to identify which list is which
		var newListStorageName = "newList" + newListNumber

		localStorage.setItem(newListStorageName, JSON.stringify(newList))

		newListNumber++;



		
	}
	render(){
		return(
			<div className="col-sm-9">


				<h1>Create New List</h1>

				<form onSubmit={this.createList}>

					Enter Ten Words! 
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					<input className="own-line" type="text" />
					

					<div className="input-group">
						<div className="input-group-addon">Enter List Name:</div>
						<input className="form-control" placeholder="Search For A Word" type="text" />
					</div>
					<button type="submit">Save</button>	
					

				</form>
				
			</div>
			
		)
	}
}


export default CreateNewList;