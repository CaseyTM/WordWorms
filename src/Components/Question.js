import React, { Component } from 'react';
import Data from './data.js'

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = { //state changes when user submits an answer; need properties to reflect this change
			answerChecked: 1, //need a property to represent if an answer has been checked
			correctAnswer: this.props.question.ans //need a property to represent whether answer checked is the correct answer
		}
		this.checkAnswer = this.checkAnswer.bind(this);  //need to bind checkAnswer so we can access the correct 'this' (so we can set state correctly)
		this.radioChanged = this.radioChanged.bind(this);
	}

	radioChanged(event) {  //takes the radio button click as an event; sets answerChecked (defined within state after 'super') within setState to event.target.value
		this.setState({  //setting the state from the default (1) to the answer checked by the user
			answerChecked: event.target.value
		})
	}

	checkAnswer(event) { //takes the submit event passed from the form below
		event.preventDefault();
		if (this.state.answerChecked == this.state.correctAnswer) {
			console.log("Yeah!")
			this.props.letMeKnowWhenFinished(1); //1 = correct; will allow quiz to advance; refers to state components found in userAnswered to trigger
		}
		else {
			console.log("Wtf dude?")
			this.props.letMeKnowWhenFinished(0); //0 = incorrect; will allow quiz to advance; refers to state components found in userAnswered to trigger
		}
	}

	render () {
		var optionsArray = [];
		var self = this; //need to preserve the question self, not refer to the map function
		this.props.question.options.map(function(option, index) {
			optionsArray.push(
				<div key={index}>
					<input type="radio" onChange={self.radioChanged} name="questionAnswer" value={option.text} /> {/*Needs an onChange listener to call a function to update state, needs a value component to reflect the value of the option selected; name property ensues that more than one radio button can not be selected simultaneously*/}
					{option.text}
				</div>
			)
		})
		return (
			<div className="question">
				{this.props.question.qtext}
				<form onSubmit={this.checkAnswer} >  {/*this calls the method checkAnswer, which will check whether the answer selected matches the correct answer in props*/}
					{optionsArray}
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default Question;