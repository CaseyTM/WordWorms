import React, { Component } from 'react';


class WordOfTheDay extends Component {
    render() {
        return (
                <div className="col-sm-9">
                    <h1>Todays word is {wordForToday.word} </h1>
                    <h2>Definition: {wordForToday.definition} </h2>
                    <h3>Etymology: {wordForToday.etymology} </h3>
                </div>
        )
    }
}

class DailyWord{
    constructor(word, definition, etymology){
        this.word = word
        this.definition = definition
        this.etymology = etymology
        
    }
}
    var wordArray = [];

wordArray.push(new DailyWord("Candor", "the quality of being open and honest in expression; frankness.", "1350-1400 (for sense 'extreme whiteness'); Middle English < Latin: radiance, whiteness; see candid"));
wordArray.push(new DailyWord("Inference", "a conclusion reached on the basis of evidence and reasoning.", "1585-95; < Medieval Latin inferentia. See infer, -ence"));
wordArray.push(new DailyWord("Discombobulate", "disconcert or confuse (someone).", "1825-35, Americanism; fanciful alteration of discompose or discomfort"));
wordArray.push(new DailyWord("Zenith", "a highest point or state; culmination.", "1350-1400; Middle English cenith < Medieval Latin < Old Spanish zenit, scribal error for zemt < Arabic samt road, incorrectly read as senit by medieval scribes (compare Arabic samt ar-rās road above (over) one's head, the opposite of nadir)"));
wordArray.push(new DailyWord("Misanthrope", "a person who hates or distrusts humankind", "Greek misanthrōpos hating humankind, from misein to hate + anthrōpos human being. First Known Use: 1683"));
wordArray.push(new DailyWord("Esoteric", "requiring or exhibiting knowledge that is restricted to a small group <esoteric terminology>; broadly :  difficult to understand <esoteric subjects>", "Late Latin esotericus, from Greek esōterikos, from esōterō, comparative of eisō, esō within, from eis into; akin to Greek en in — more at in. First Known Use: circa 1660"));
wordArray.push(new DailyWord("Capricious", "subject to, led by, or indicative of a sudden, odd notion or unpredictable change; erratic:", "1590s, from French capricieux 'whimsical' (16c.), from Italian capriccioso, from capriccio (see caprice ). Related: Capriciously ; capriciousness."));
var randIndex = Math.floor(Math.random()*wordArray.length);


var wordForToday = wordArray[randIndex];
console.log(wordForToday)

export default WordOfTheDay