const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was HTML first proposed?",
        a: "1990",
        b: "1989",
        c: "1991",
        d: "1995",
        correct: "b",
    },
    {
        question: "Who is known as the father of HTML?",
        a: "Brendan Eich",
        b: "Tim Berners-Lee",
        c: "Håkon Wium Lie",
        d: "Douglas Crockford",
        correct: "b",
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<css>",
        c: "<style>",
        d: "<link>",
        correct: "c",
    },
    {
        question: "Which is the correct HTML element for the largest heading?",
        a: "<heading>",
        b: "<h6>",
        c: "<h1>",
        d: "<head>",
        correct: "c",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "style",
        c: "styles",
        d: "font",
        correct: "b",
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<list>",
        correct: "a",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<lb>",
        c: "<br>",
        d: "<newline>",
        correct: "c",
    },
    {
        question: "Which HTML tag is used to define a table?",
        a: "<table>",
        b: "<tab>",
        c: "<tbl>",
        d: "<t>",
        correct: "a",
    },
    {
        question: "What does the <img> tag require?",
        a: "alt",
        b: "src",
        c: "title",
        d: "both alt and src",
        correct: "d",
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
