// Bring in react & reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// bring in app component
import App from './Components/App';

// bring in components that will match routes
import QuizMe from './Components/QuizMe.js';
import Quiz from './Components/Quiz.js'
import CreateNewList from './Components/CreateNewList.js';
import MyLists from './Components/MyLists.js';
import ViewProgress from './Components/ViewProgress.js';
import Home from './Components/Home.js';
import SearchWord from './Components/SearchWord.js';
import SavedWords from './Components/SavedWords.js';
import ViewCustomList from './Components/ViewCustomList.js'
import UserListQuiz from './Components/UserListQuiz.js'


// custom Css
import './index.css';

// We need to bring in the router 
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

//need nested routes on my lists to link to the various lists the user is allowed to select from

var myListRouterArray = [];
// need nested routes on my lists to link to the various lists the user selects from
var quizMeArray = []

myListRouterArray.push(<Route path="createNewList" component={CreateNewList} />)



//write code here that goes to local storage and grabs children 
<<<<<<< HEAD
		for (var i=0; i <localStorage.length; i++){
			// dynamically create list names to match the new lists that were stored in local storage
			var listPulledFromStorage = "newList" + i 
			var retrievedObject = localStorage.getItem(listPulledFromStorage)
			var newList = JSON.parse(retrievedObject);
			//create a link with information above
			var nameOfButton = newList.name
			var linkTo = "/viewList/" + nameOfButton
			console.log(newList);

			// give each one a button name and key number so that the console doesn't whine 
			myListRouterArray.push(<Route path={linkTo} component={ViewCustomList} />)	
			
		}
=======
for (var i=0; i <localStorage.length; i++){
	// dynamically create list names to match the new lists that were stored in local storage
	var listPulledFromStorage = "newList" + i 
	var retrievedObject = localStorage.getItem(listPulledFromStorage)
	var newList = JSON.parse(retrievedObject);
	//create a link with information above
	var nameOfButton = newList.name
	var linkTo = "/viewList/" + nameOfButton
	

	// give each one a button name and key number so that the console doesn't whine 
	myListRouterArray.push(<Route path={linkTo} component={ViewCustomList} />)	
	
}

for (var i=0; i<localStorage.length; i++){

	var listPulledFromStorage = "newList" + i 
	var retrievedObject = localStorage.getItem(listPulledFromStorage)
	var newList = JSON.parse(retrievedObject);
	//create a link with information above
	var nameOfButton = newList.name
	var linkTo = "/quizMeOn/" + nameOfButton	
	console.log(linkTo);
	quizMeArray.push(<Route path={linkTo} component={UserListQuiz} />)

}


>>>>>>> Development2

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>			
			<IndexRoute component={Home} />
			<Route path='search/:id' component={SearchWord} />
			<Route path='home' component={Home} />			
			<Route path='quizMe' component={QuizMe}>
				<Route path='/randomQuiz' component={Quiz} />
				{quizMeArray}
			</Route>			

			<Route path='myLists' component={MyLists} >
				{myListRouterArray}
					// <Route path="savedWords" component={SavedWords} />									
			</Route>			

			<Route path='viewProgress' component={ViewProgress} />			
		</Route>		  
	</Router>,
  document.getElementById('root')
);
