// We need Component
// We also need the link so that we can actively change routes
//fix comments!!!!!!!

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import $ from 'jquery'
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


		

		var tenDefinitionsArray = []
		var wordPromises = []
		var tenWordObjects = []

		// for(var i=0; i<userInputtedWords.length; i++){
		// 	if(userInputtedWords[i] !== ""){
		// 		var url = "http://ec2-54-218-208-100.us-west-2.compute.amazonaws.com:5000/?word="+userInputtedWords[i];
		// 		// console.log(i);
				

		// 		// var wordAjaxRequest = $.getJSON(url, (wordApiResponse) =>{
				
		// 		// 	var newDefinitionInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]															
		// 		// 	tenDefinitionsArray.push(newDefinitionInfo);



		// 		// 	// tenWordObjects.push(newDefinitionInfo);
		// 		// 	// console.log(tenWordObjects);
		// 		// });
				
		// 		//this will be a promise object	
		// 		// wordPromises.push(wordAjaxRequest) //this will fill the array with a bunch of javavscript promises
		// 	}
		// }

		// $.when.apply(null, wordPromises).done(()=>{

		// 	console.log(wordPromises);
		// 	for(let i = 0; i<wordPromises.length; i++){
		// 		tenWordObjects.push(wordPromises[i].responseJSON.results)
		// 	}
		// 	console.log(tenWordObjects);

		// 	//create an array with ten word objects that holds the term and definition for each wordObject
			

		// 	for (var i=0; i<userInputtedWords.length; i++){
		// 		var wordObject = {
		// 			term: userInputtedWords[i],
		// 			definition: tenDefinitionsArray[i]
		// 		}

		// 		tenWordObjects.push(wordObject)
		// 		// console.log(tenWordObjects);
		// 	}
			
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
					

					<div className="input-group margin-above">
						<div className="input-group-addon">Enter List Name:</div>
						<input className="form-control width-shrink" placeholder="Save List Name" type="text" />
					</div>
					<button className="btn btn-primary button-same-row" type="submit">Save</button>	
					

				</form>
				
			</div>
			
		)
	}
}


export default CreateNewList;