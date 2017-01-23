import React, { Component } from 'react'
import Question from './Question.js'
import Data from './data.js'

//global percent display variable 
var scorePercentDisplay = "";
var scoreDisplay = "";


class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = { //quiz has to manage a state change to advance to the next question once the previous/current question has been answered
			questionIndex: Math.floor(Math.random() * Data.questions.length), //holds index of current question; initializes randomly so as to begin at a random point in data.js
			userScore: 0, //score is a state property; needs to be managed by Quiz and calculated as we advance
			scoreAsPercent: 0,
			// questionCounter: 0,  //need to keep track of how many questions have been asked in random quiz
			usedQuestions: [] //keeps track of which questions from data.js presented to user
		}
		this.userAnswered = this.userAnswered.bind(this); //binds userAnswered to the quiz
		this.getRandomQuestionNumber = this.getRandomQuestionNumber.bind(this);
		scoreDisplay = "";
	}

	getRandomQuestionNumber() {
			var i = 0;
			var questionNumber = Math.floor(Math.random() * Data.questions.length);
			var match = false;
			while (match === false && i < this.state.usedQuestions.length) {
				if (questionNumber === this.state.usedQuestions[i]) {
					match = true;
				}
				i += 1;
			}
			if (match === true) {
				return this.getRandomQuestionNumber();
			}
			else {
				return questionNumber;
			}
	}

	userAnswered(correctOrNot) { //exists so that quiz can calculate score and advance question index
		var questionsUsed = this.state.usedQuestions;  //can't directly manipulate states; must use setState.  Want to make questionsUsed equal usedQuestions so questionsUsed can be manipulated and passed into setState as the new value for usedQuestions (what a mouthful)
		questionsUsed.push(this.state.questionIndex);  //pushes the most recent questionIndex onto the questionsUsed array
		var newQuestionNumber = this.getRandomQuestionNumber();  //holding the next question in the index of questions in a variable; randomizing the next question that appears
		//need an if statement to see whether or not the answer entered is the correct one.  if it is, update the score, if not advance to next question
		if (correctOrNot === 1) {
			//user got the question right.  Update the score.
			var newScore = (this.state.userScore + 1);//holds the user's score in a variable
			// var newCount = (this.state.questionCounter + 1);
			console.log(newScore)
			var newScoreAsPercent = Math.round((newScore / 10) * 100) //representing the score as a percent value
			this.setState({			
				questionIndex: newQuestionNumber,
				userScore: newScore,
				scoreAsPercent: newScoreAsPercent,
				// questionCounter: newCount,
				usedQuestions: questionsUsed
			});
		}
		else { //user got the question wrong.  Advance to next question.  Don't increment score.
			this.setState({
				questionIndex: newQuestionNumber,
				// questionCounter: newCount,
				usedQuestions: questionsUsed
			});
		}
	}

	render () {
		//quizArray will contain all the questions on the quiz; they need to be pushed on from data.js 
		var quizArray = [];
		//need 10 questions max
		if (this.state.usedQuestions.length < 10) {
			quizArray.push(
			<Question letMeKnowWhenFinished={this.userAnswered} question={Data.questions[this.state.questionIndex]} key={this.state.questionIndex} /> //questions is an array - we have to pass it one question at a time, hence the [] after Data.questions - we need to pass it one question at a time, hence why we're passing it this.state.questionIndex; letMeKnowWhenFinished is the title of the prop that's passed userAnswered (will handle score updating and question advancement once question has been answered and scored)
			)

			// var scorePercentDisplay = "3";
		} else{
			//the user has completed the quiz
			scorePercentDisplay = this.state.scoreAsPercent;
			scoreDisplay = "You got " + scorePercentDisplay + "% correct!"

		}
		return (
			<div className="App">

			<h1>{scoreDisplay}</h1>
				<h2>{quizArray}</h2>
			</div>
		)
	}
}

export default Quiz;