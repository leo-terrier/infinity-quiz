const startButton = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
  console.log('started')
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;
}

function selectAnswer() {

}

const questions = [
  {
    "question": 'what is 2 + 2',
    "correct_answer": '2',
    "incorrect_answer": ['22', '42', '78']
    // answers: [
    //   { text: '4', correct: true },
    //   { text: '2', correct: false },
    //   { text: '8', correct: false },
    //   { text: '10', correct: false },
    // ]

  },

  {
    "question": 'what is 78 + 2',
    "correct_answer": '80',
    "incorrect_answer": ['69', '7', '75']
    // answers: [
    //   { text: '4', correct: true },
    //   { text: '2', correct: false },
    //   { text: '8', correct: false },
    //   { text: '10', correct: false },
    // ]

  },

  {
    "question": 'what is 258 + 2',
    "correct_answer": '260',
    "incorrect_answer": ['1', '4', '7']
    // answers: [
    //   { text: '4', correct: true },
    //   { text: '2', correct: false },
    //   { text: '8', correct: false },
    //   { text: '10', correct: false },
    // ]

  }
]