// Bring in react & reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// bring in app component
import App from './Components/App';

// bring in components that will match routes
import QuizMe from './Components/QuizMe.js';
import CreateNewList from './Components/CreateNewList.js';
import MyLists from './Components/MyLists.js';
import ViewProgress from './Components/ViewProgress.js';
import Home from './Components/Home.js';
import SearchWord from './Components/SearchWord.js';
import SavedWords from './Components/SavedWords.js';


// custom Css
import './index.css';

// We need to bring in the router 
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

//need nested routes on my lists to link to the various lists the user is allowed to select from
ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>			
			<IndexRoute component={Home} />
			<Route path='search/:id' component={SearchWord} />
			<Route path='home' component={Home} />			
			<Route path='quizMe' component={QuizMe} />			

			<Route path='myLists' component={MyLists} >
				<Route path="createNewList" component={CreateNewList}>
					// <Route path="savedWords" component={SavedWords} />	
				</Route>

			</Route>			

			<Route path='viewProgress' component={ViewProgress} />			
		</Route>		  
	</Router>,
  document.getElementById('root')
);
