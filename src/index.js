// Bring in react & reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// bring in app component
import App from './Components/App';
import QuizMe from './Components/QuizMe.js'
import CreateNewList from './Components/CreateNewList.js'
import ViewProgress from './Components/ViewProgress.js'
// custom Css
import './index.css';

// We need to bring in the router 
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>			
			<Route path='quizMe' component={QuizMe} />			
			<Route path='createNewList' component={CreateNewList} />			
			<Route path='viewProgress' component={ViewProgress} />			
		</Route>		  
	</Router>,
  document.getElementById('root')
);
