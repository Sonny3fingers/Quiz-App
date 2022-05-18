const quizData = [
  {
    question:
      "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
    a: "Vietnam",
    b: "China",
    c: "Sweden",
    d: "France",
    correct: "a",
  },
  {
    question: "Which famous Pulp Fiction scene was filmed backward?",
    a: "Vincent and Mia’s dance scene",
    b: "Mia’s overdose scene",
    c: "The royale with cheese scene",
    d: "The Ezekiel 25:17 scene",
    correct: "b",
  },
  {
    question: "Freddy Krueger wears a striped sweater that is which colors?",
    a: "Red and blue",
    b: "Orange and green",
    c: "Red and green",
    d: "Orange and brown",
    correct: "c",
  },
  {
    question: "Who did the cat in The Godfather belong to?",
    a: "Francis Ford Coppola",
    b: "Al Pacino",
    c: "Dianne Keaton",
    d: "No one—the cat was a stray",
    correct: "d",
  },
  {
    question: "What item is in every Fight Club scene?",
    a: "A Coca-Cola can",
    b: "A Starbucks cup",
    c: "A Dunkin’ donut",
    d: "A Pepsi bottle",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

submit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered at ${score} / ${quizData.length} correctly questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
