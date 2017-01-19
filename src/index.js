// Bring in react & reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// bring in app component
import App from './Components/App';

// bring in components that will match routes
import QuizMe from './Components/QuizMe.js';
import CreateNewList from './Components/CreateNewList.js';
import ViewProgress from './Components/ViewProgress.js';
import Home from './Components/Home.js';
import SearchWord from './Components/SearchWord.js';


// custom Css
import './index.css';

// We need to bring in the router 
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>			
			<IndexRoute component={Home} />
			<Route path='search/:id' component={SearchWord} />
			<Route path='home' component={Home} />			
			<Route path='quizMe' component={QuizMe} />			
			<Route path='createNewList' component={CreateNewList} />			
			<Route path='viewProgress' component={ViewProgress} />			
		</Route>		  
	</Router>,
  document.getElementById('root')
);
