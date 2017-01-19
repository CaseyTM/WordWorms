import React, { Component } from 'react';
import $ from 'jquery';

class SearchWord extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		var word = this.props.params.id;
		// need to generate a URL based on the word
		var url = "http://wasjustthinking.com:5000/?word="+word

		$.getJSON(url, (wordApiResponse) =>{
			console.log(wordApiResponse)
		})
		return(
			<div>
				<h1> Word: </h1>
				<p>{word} </p>
			</div>
		)
	}
}

export default SearchWord;