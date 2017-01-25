import React, { Component } from 'react';
import $ from 'jquery';

// var newDefinitionInfo = ""
// var newEtymologyInfo = ""

class SearchWord extends Component{
	constructor(props){
		super(props)
		this.state = {
			definition: "",
			etymology: "",
			word: ""

		}
		this.addWordToList = this.addWordToList.bind(this);
	}

	addWordToList(){
		console.log(this.state.word)
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		var word = nextProps.params.id;

		var url = "http://ec2-54-218-208-100.us-west-2.compute.amazonaws.com:5000/?word="+word;
		var self = this;





		$.getJSON(url, (wordApiResponse) =>{
			//grab the first definition and etymology response as it is usually teh most commonly used term
			var newDefinitionInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
			

			var newEtymologyInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].etymologies

			let newWord = wordApiResponse.results[0].word;
			console.log(wordApiResponse)
			// console.log(newEtymologyInfo)

			self.setState({
				definition: newDefinitionInfo,
				etymology: newEtymologyInfo,
				word: newWord
			})
		})


	}


	componentDidMount() {
		var word = this.props.params.id;
		var url = "http://ec2-54-218-208-100.us-west-2.compute.amazonaws.com:5000/?word="+word
		var self = this





		$.getJSON(url, (wordApiResponse) =>{
			//grab the first definition and etymology response as it is usually teh most commonly used term
			var newDefinitionInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]

			var newEtymologyInfo = wordApiResponse.results[0].lexicalEntries[0].entries[0].etymologies
			let newWord = wordApiResponse.results[0].word;
			// console.log(wordApiResponse)
			// console.log(newEtymologyInfo)

			self.setState({
				definition: newDefinitionInfo,
				etymology: newEtymologyInfo,
				word: newWord

			})



		})


	}


	render(){
		var word = this.props.params.id;



		// console.log(this.state.definition)
		// console.log(this.state.etymology)
		// need to generate a URL based on the word

		return(
			<div className="col-xs-12">
				<h1 className="searchWord bold-text"> Word: </h1>
				<p className="well">{this.state.word} </p>

				<h1 className="searchWord bold-text">Definition: </h1>
				<p className="well">{this.state.definition} </p>

				<h1 className="searchWord bold-text"> Etymology: </h1>
				<p className="well">{this.state.etymology} </p>


			</div>
		)
	}
}

export default SearchWord;
