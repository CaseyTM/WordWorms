// We need Component
// We also need the link so that we can actively change routes


import React, { Component } from 'react';
import { Link } from 'react-router';
import Quiz from './Quiz.js'

class QuizMe extends Component {

	render(){
		return(
			<div className="col-sm-9">
				<h1>Please select a quiz option.</h1>
					<Link to="randomQuiz"><button className="random-quiz-option">Generate Random Quiz</button></Link>
					{this.props.children}
			</div>
		)
	}
}

export default QuizMe;