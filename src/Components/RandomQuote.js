import React, { Component } from 'react';



class RandomQuote extends Component {

	render() {
		return (
				<div className="col-sm-9">
					<h1>{fullQuote}</h1>
				</div>
		)
	}
}

export default RandomQuote 

//Quote information below 




class Quote{
	constructor(quote, author){
		this.quote = quote;
		this.author = author;
	}
}
var quotes = [];
 
quotes.push(new Quote("It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.", "Mark Twain"));
quotes.push(new Quote("The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.", "Carl Sagan"));
quotes.push(new Quote("There is a distinct difference between having an open mind and having a hole in your head from which your brain leaks out.", "James Randi"));
quotes.push(new Quote("As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.", "Albert Einstein"));
quotes.push(new Quote("If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.", "J.K. Rowling"));
quotes.push(new Quote("Always do right. This will gratify some people and astonish the rest.", "Mark Twain"));
quotes.push(new Quote("Just to settle it once and for all: Which came first the Chicken or the Egg? The Egg — laid by a bird that was not a Chicken", "Neil deGrasse Tyson"));
quotes.push(new Quote("Joy is not in things; it is in us.", "Richard Wagner"));
quotes.push(new Quote("I would rather have questions that can't be answered than answers that can't be questioned.", "Richard P. Feynman"));
quotes.push(new Quote("Tact is the knack of making a point without making an enemy.", "Isaac Newton"));
quotes.push(new Quote("As we express our gratitude we must never forget that the highest appreciation is not to utter words, but to live by them.", "John F. Kennedy"));
quotes.push(new Quote("Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", "Martin Luther King Jr."));
quotes.push(new Quote("I became insane, with long intervals of horrible sanity.", "Edgar Allan Poe"));
quotes.push(new Quote("I like escalators, because an escalator can never break; it can only become stairs. There would never be an 'Escalator temporarily out of order' sign. Only an 'Escalator temporarily stairs... Sorry for the convenience'", "Mitch Hedberg"));
quotes.push(new Quote("A day without sunshine is like, you know, night.", "Steve Martin"));
quotes.push(new Quote("Behind every great man is a woman rolling her eyes.", "Jim Carrey"));
quotes.push(new Quote("I'm sorry, if you were right, I'd agree with you.", "Robin Williams"));






var randIndex = Math.floor(Math.random()*quotes.length)
var fullQuote = quotes[randIndex].quote + " ~ " + quotes[randIndex].author;