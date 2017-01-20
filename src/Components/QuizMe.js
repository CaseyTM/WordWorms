// We need Component
// We also need the link so that we can actively change routes


import React, { Component } from 'react';
import Quiz from './Quiz.js'


// function QuizMe(props) {
// 	return (
		
// 	)
// }

class QuizMe extends Component{
	render(){
		return(

			<div className="col-sm-9">
				<Quiz />
			</div>

		)
	}
}

// QuizMe.propTypes = {
// 	content: React.PropTypes.string.isRequired
// };



export default QuizMe;