const questions = [
  {
    text: "“The only limit to our realization of tomorrow is our doubts of today.”",
    answer: "Human"
  },
  {
    text: "“Optimization of loss functions leads to better model generalization.”",
    answer: "AI"
  },
  {
    text: "“Creativity is intelligence having fun.”",
    answer: "Human"
  },
  {
    text: "“Data is the new oil fueling machine learning algorithms.”",
    answer: "AI"
  },
  {
    text: "“Inspiration exists, but it has to find you working.”",
    answer: "Human"
  },
  {
    text: "“Neural networks can approximate any continuous function given enough neurons.”",
    answer: "AI"
  },
  {
    text: "“The best way to predict the future is to invent it.”",
    answer: "Human"
  },
  {
    text: "“Transformers revolutionize natural language processing.”",
    answer: "AI"
  },
  {
    text: "“Imagination is more important than knowledge.”",
    answer: "Human"
  },
  {
    text: "“Backpropagation adjusts weights to minimize error.”",
    answer: "AI"
  },
  {
    text: "“The journey of a thousand miles begins with a single step.”",
    answer: "Human"
  },
  {
    text: "“Generative adversarial networks create realistic images.”",
    answer: "AI"
  },
  {
    text: "“Life is what happens when you’re busy making other plans.”",
    answer: "Human"
  },
  {
    text: "“Reinforcement learning learns optimal policies via rewards.”",
    answer: "AI"
  },
  {
    text: "“Do what you can, with what you have, where you are.”",
    answer: "Human"
  }
];

const questionBox = document.getElementById("question-box");
const options = document.querySelectorAll(".option-btn");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const retryBtn = document.getElementById("retry-btn");

let current = 0;
let score = 0;

function showQuestion() {
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  scoreBox.classList.add("hidden");
  retryBtn.classList.add("hidden");
  
  questionBox.textContent = questions[current].text;
  options.forEach(btn => {
    btn.disabled = false;
    btn.style.backgroundColor = "#2980b9";
  });
}

function checkAnswer(e) {
  const selected = e.target;
  const userAnswer = selected.getAttribute("data-answer");
  const correctAnswer = questions[current].answer;

  options.forEach(btn => btn.disabled = true);

  if (userAnswer === correctAnswer) {
    score++;
    feedback.textContent = "Correct! 🎉";
    selected.style.backgroundColor = "#27ae60";
  } else {
    feedback.textContent = `Wrong! The answer was "${correctAnswer}".`;
    selected.style.backgroundColor = "#e74c3c";
    options.forEach(btn => {
      if (btn.getAttribute("data-answer") === correctAnswer) {
        btn.style.backgroundColor = "#27ae60";
      }
    });
  }

  if (current < questions.length - 1) {
    nextBtn.classList.remove("hidden");
  } else {
    showScore();
  }
}

function showScore() {
  questionBox.textContent = "";
  options.forEach(btn => btn.classList.add("hidden"));
  feedback.textContent = "";
  nextBtn.classList.add("hidden");

  scoreBox.textContent = `Your score: ${score} out of ${questions.length}`;
  scoreBox.classList.remove("hidden");
  retryBtn.classList.remove("hidden");
}

function nextQuestion() {
  current++;
  options.forEach(btn => btn.classList.remove("hidden"));
  showQuestion();
}

function retryQuiz() {
  current = 0;
  score = 0;
  options.forEach(btn => btn.classList.remove("hidden"));
  showQuestion();
  scoreBox.classList.add("hidden");
  retryBtn.classList.add("hidden");
}

options.forEach(btn => btn.addEventListener("click", checkAnswer));
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", retryQuiz);

showQuestion();

