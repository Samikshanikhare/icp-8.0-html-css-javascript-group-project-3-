const quizData = [
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseclick",
        c: "onmouseover",
        d: "onclick",
        correct: "d",
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        a: "_variable",
        b: "variable1",
        c: "1variable",
        d: "variable_1",
        correct: "c",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction() { }",
        b: "def myFunction() { }",
        c: "create myFunction() { }",
        d: "function:myFunction() { }",
        correct: "a",
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a",
    },
    {
        question: "Which of the following is used to declare a constant in JavaScript??",
        a: "let",
        b: "const",
        c: "var",
        d: "constant",
        correct: "b",
    },
    {
    question: "How can you add a comment in a JavaScript code?",
        a: "<!-- This is a comment -->",
        b: "// This is a comment",
        c: "/* This is a comment */",
        d: "Both b and c",
        correct: "d",
    },
    {
        question: "Which built-in method returns the length of a string?",
        a: "length()",
        b: "size()",
        c: "index()",
        d: "length",
        correct: "d",
    },
    {
        question: "How can you convert a string to an integer in JavaScript?",
        a: "Integer.parse()",
        b: "parseInt()",
        c: "toInteger()",
        d: "parseInteger()",
        correct: "b",
    },
    {
        question: "Which of the following is used to loop through the properties of an object in JavaScript?",
        a: "for",
        b: "forEach",
        c: "for...in",
        d: "for...of",
        correct: "c",
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "variable myVar",
        b: "v myVar",
        c: "var myVar",
        d: "variable:myVar",
        correct: "c",
    }

];


const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const feedbackEl = document.getElementById("feedback");


let currentQuiz = 0;
let score = 0;
let time = 180; // 3 minutes in seconds

loadQuiz();
startTimer();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    feedbackEl.innerText = '';
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            feedbackEl.innerText = 'Correct!';
            feedbackEl.style.color = 'green';
        } else {
            feedbackEl.innerText = `Wrong! The correct answer was ${quizData[currentQuiz].correct.toUpperCase()}.`;
            feedbackEl.style.color = 'red';
        }
        scoreEl.innerText =` Score: ${score}`;
        currentQuiz++;
        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                clearInterval(timerInterval);
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }, 1000); // Delay to show feedback for a second
    }
});

function startTimer() {
    timerInterval = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerEl.innerText = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            quiz.innerHTML = `
                <h2>Time's up! You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }, 1000);
}
