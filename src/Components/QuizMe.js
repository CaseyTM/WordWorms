// We need Component
// We also need the link so that we can actively change routes


import React, { Component } from 'react';
import { Link } from 'react-router';
import Quiz from './Quiz.js'


class LinkItem extends Component{
	reloadPage(){
		location.reload()
	}

	render(){

		var buttonNameToUse = 'Quiz Me On The "' + this.props.buttonName + '" List'

		var linkTo = "quizMeOn/"+this.props.buttonName;

		return(
			<Link to={linkTo}> <button onClick={this.reloadPage}className="btn btn-primary button-same-row"> {buttonNameToUse} </button> </Link>
		)
	}
}

class QuizMe extends Component {

	render(){

		//need to create an array that will hold the links we are going to push
		var linksArray = [];
		//need to push the links to the array based on local storage
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
				<h1>Please select a quiz option.</h1>
					<Link to="randomQuiz"><button className="btn btn-success random-quiz-option">Generate Random Quiz</button></Link>
					{linksArray}
					{this.props.children}
					

			</div>
		)
	}
}

export default QuizMe;
