import React, { Component } from 'react';
import $ from 'jquery';


// var newDefinitionInfo = ""
// var newEtymologyInfo = ""

//write logic that grabs name using this.props.params


class UserListQuiz extends Component{
	

	render(){
		var url = location.href;
		// now that we have the url, let's split it up by teh slashes
		var urlArray = url.split('/')
		// the list name is going to be the last thing in the index
		var listName = urlArray[urlArray.length - 1]

		
		var word1 = []
		

		// should be able to go and grab items from the object
	
		for (var i=0; i<localStorage.length; i++){
			// parse all of hte objects into a JSON object
			var listPulledFromStorage = "newList" + i 
			var retrievedObject = localStorage.getItem(listPulledFromStorage)
			var newList = JSON.parse(retrievedObject);
			// get the ten words associated with this object
			var newTenWordsArray = newList.tenWordsInArray	
			

			// if this is the correct list, then we can actually map through teh words associated with teh list
			if (newList.name === listName){				
				word1 = newTenWordsArray[1]
				var url = "http://wasjustthinking.com:5000/?word="+word1;
				$.getJSON(url, (wordApiResponse) =>{
				
				var newDefinitionInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]															
				})
			}
		}
			

		
		return(
			<div>
				<h1> {word1} </h1>
				
			</div>
		)
	}
}

export default UserListQuiz;