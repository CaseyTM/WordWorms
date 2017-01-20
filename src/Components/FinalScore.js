import React, { Component } from 'react';

class FinalScore extends Component {
	render () {
		return (
			<div>
				<h1>You have {this.state.scoreAsPercent}% correct!</h1>
			</div>
		)
	}
}

export default FinalScore;