# Team Angry Carrot Sticks - WordWorms

<a href="http://www.elizabethgulsby.com/wordworms/#/">WordWorms</a>

### Contents
    - Overview
    - What We Used
    - Challenges and Solutions
    - MVP
    - Our Stretch Goals
    - Authors
    - Screenshots
    - Github Link
    - Code Examples

### Overview
    This is our first collaborative front-end project which utilizes our knowledge gained thus far.  We desired 
    an environment where the user could expand their vocabulary in a responsive environment. The app 
    provides some information to begin; however it is designed to provide a repository for unfamiliar terms, ensuring
    you never need to look up a word more than once.

### What we Used
    - React and React-Router
    - Javascript ES-6
    - HTML
    - CSS
    - Jquery
    - Oxford University Press API
    - AWS

### Challenges and Solutions

    __Challenge 1__: Had difficulties with sourcing a reliable Words API. A lot of APIs returned definitions where the most pertinent definition was not always the first. 

    *Solution*: Ended up choosing the Oxford Dictionaries API. This almost always logged the most relevant definition as the first one. This way, we were able to source the first definition returned from every AJAX request and provide the user with a solid definition on every search.

    __Challenge 2__: Once we succesfully created the search functionionality using react router, we ran into the problem of searching for new words without having to first refresh the page. 

    *Solution*: The problem was that we were making an AJAX call using ComponentDidMount. While this was fine for initial load, every time the user tried to search again, the page would not load the new searched word. Put simply, the search function was good for only the first search. This happened because the Component had already mounted. Our solution to this was adding in ComponentWillReceiveProps. This fixed the solution because a new parameter (the URL changed) was added causing ComponentWillReceiveProps to fire which in turn ran another AJAX call and re-rendered the page with the new definition and corresponding etymology. 

    __Challenge 3__: Had difficulties committing/pushing/brancing with SourceTree

    *Solution*: Created an alternate branch and practiced until we felt comfortable using source tree / pulling from one another. Once we felt comfortable, we created a system where we had to pull from the team branch and merge into our personal branch before making changes. This ensured everyone was at the same place prior to moving forward. 
    

### MVP
    - Searching for words 
    - Creating custom lists 
    - Generating random quiz

### Our Stretch Goals
    - Game
    - Quizzes generated on custom lists

### Authors
    All team members are students in DigitalCrafts' November 2016 cohort.  This project was completed using the SCRUMM agile development methodology.  Paired programming was utilized throughout all stages of development, with some individual focus on localized components of the application.

    *Rishi Karri*
       ***Front-end Developer***
       __Contributions__:  Provided initial concept. Built custom list feature, search component, local storage solution for storing custom lists, added features to each component within the lifecycle, and assisted with troubleshooting the implementation throughout the project.  

   *Elizabeth Gulsby*
       ***SCRUMM Master, Front-end Developer***
       __Contributions__: Managed the team's development process for the project, including planning functionality for each stage and navigating obstacles impeding progress. Created quiz feature with random question generation, provided support and assisted with troubleshooting.

   *Casey McCaskill*
       ***Front-end Developer***
       __Contributions__: Developed home page features, including random quote generation as well as random word generation with corresponding etymology.  Provided support and assisted with troubleshooting throughout the project.  

   *JT Townsend*
       ***Front-end Developer/Styling Guru***
       __Contributions__: Provided suggestions for developing concept and styling for application.  Implemented responsive layout and design.

### Screen shots
    <img src='./Images/wordworms_1.gif'>
    <img src='./Images/wordworms_2.gif'>
        
### Github

<a href='https://github.com/CaseyTM/WordWorms'>WordWorms</a>

### Code Examples

```
"//searching for words, adding ability to generate and populate custom lists
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
        var url = "http://wasjustthinking.com:5000/?word="+word;
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

    //creating quiz, generating random questions
    "class Quiz extends Component {
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
    }"