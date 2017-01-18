// Bring in react & reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// bring in app component
import App from './Components/App';
// custom Css
import './index.css';

// We need to bring in the router 
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
		</Route>		  
	</Router>,
  document.getElementById('root')
);
