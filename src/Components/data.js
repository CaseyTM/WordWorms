module.exports = {
		name: "Sample Test",
		description: "This is a sample test paper to demonstrate the ReactJS UI design by components.",
		passCutoff: 0.33,		
		applyNegativeMarking: false,
		questions: [
			{
			id: "1",
			qtext:"California is in which part of USA?",
			options:[
				{text:"East"},
				{text:"Mid"},
				{text:"West"},
				{text:"South"}
			],
			ans:"West",
			marks: 3
		},
		{
			id: "2",
			qtext:"Who is Prime Minister of India?",
			options:[
				{text:"Sonia Gandhi"},
				{text:"Narendra Modi"},
				{text:"Manmohan Singh"},
				{text:"Rahul Gandhi"}
			],
			ans:"Narendra Modi",
			marks: 2
		},
		{
			id: "3",
			qtext:"Which of the following is most popular Search Engine Company?",
			options:[
				{text:"Microsoft"},
				{text:"Facebook"},
				{text:"Google"},
				{text:"Yahoo"}
			],
			ans:"Google",
			marks: 1
		},
		]
	};