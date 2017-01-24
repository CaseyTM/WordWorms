import React, { Component } from 'react';


// var newDefinitionInfo = ""
// var newEtymologyInfo = ""

//write logic that grabs name using this.props.params


class WordItem extends Component{
	
	render(){
		var wordToDisplay = this.props.wordToDisplay 
		console.log(wordToDisplay)
		return(
			<div> 
				{wordToDisplay}
			</div>
		)
	}
}

class ViewCustomList extends Component{
	
	render(){
		// grab the url
		var url = location.href;
		// now that we have the url, let's split it up by teh slashes
		var urlArray = url.split('/')

		var listName = urlArray[urlArray.length - 1]

		var wordsToReturn = []
		

		// should be able to go and grab items from the object
	
			for (var i in localStorage){
				// parse all of hte objects into a JSON object
				var retrievedObject = localStorage.getItem(i);
				var newList = JSON.parse(retrievedObject);
				var newTenWordsArray = newList.tenWordsInArray
				
				console.log(newTenWordsArray);

				if (newList.name === listName){				
					newTenWordsArray.map((word, index)=>{						
						wordsToReturn.push(<WordItem key={index} wordToDisplay={word} />)	
					})

				}				

			}
		
		
		
		return(
			<h1>{wordsToReturn}</h1>
		)
	}
}

export default ViewCustomList;