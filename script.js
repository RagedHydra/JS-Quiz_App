const quizData = [
	{
		question: "How old is Fahim?",
		a: "10",
		b: "19",
		c: "20",
		d: "21",
		correct: "b",
	},
	{
		question: "What is the most used programming language in 2019?",
		a: "Javascript",
		b: "Python",
		c: "C++",
		d: "Java",
		correct: "a",
	},
	{
		question: "Ferrari is a car manufacturer from which country?",
		a: "Italy",
		b: "Germany",
		c: "India",
		d: "Japan",
		correct: "a",
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Application Programming Interface",
		d: "None of the above",
		correct: "a",
	},
	{
		question: "When was Javascript first launched?",
		a: "1997",
		b: "1996",
		c: "1994",
		d: "None of the above",
		correct: "d",
	}
]


const answerEls = document.querySelectorAll(".answers");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBTN = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;


function loadQuiz() {
	unselect();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function unselect() {
	answerEls.forEach((answerEl) => {
	if(answerEl.checked) {
		answerEl.checked = false;
	}
}
)}


function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if(answerEl.checked) {
			answer = answerEl.id
		}
	});

	return answer;
}


loadQuiz();

submitBTN.addEventListener("click", () => {

	const answer =	getSelected();

	if(answer === quizData[currentQuiz].correct) {
		score++;
	}

	if (answer) {
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h3>You answered ${score} questions correct out of ${quizData.length}</h3> 
							  <button onclick="location.reload()">Reload</button>`;
		}
	}

});