// Exemple pour faire apparaitre des éléments dans le DOM

// document.querySelector(".logo-container").addEventListener("click", function () {
//   const p = document.createElement("p");
//   p.addEventListener("click", function () {
//     p.style.display = "none";
//   });
//   p.innerHTML = "hello world";
//   document.querySelector("main").appendChild(p);
// });

/* --------------- INITIALISATION --------------*/




const catImgElement = document.querySelector("#catImg");
const questionTextElement = document.querySelector(".textQuestion");
const buttonAnswerElement = document.querySelectorAll(".answer");
const scoreElement = document.querySelector("#score");
const nextElement = document.querySelector('.nextQuestion');
// const buttonElement = document.querySelectorAll('button');

let score = 1;

//TODO
let questions = [

  q1 = {

    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: 'On a London Underground map, what colour is the Circle Line?',
    correct_answer: 'Yellow',
    incorrect_answers: ["Red", "Blue", "Green"]
  },

  q2 = {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: "Which of these countries is landlocked (surrounded entirely by one or more landlocked countries)?",
    correct_answer: "Uzbekistan",
    incorrect_answers: ["Switzerland", "Bolivia", "Ethiopia"]
  },

  q3 = {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
    correct_answer: "Brazil",
    incorrect_answers: ["India", "Mozambique", "Madagascar"]
  },

];

newQuestion();
/* --------------- NEW QUESTION --------------*/


function getRandomIndex() {
  return Math.floor(Math.random() * questions.length);
}

//ATRIBUTE IMG URL INTO #cat-img
function imgCatAssociation(category) {
  switch (category) {
    case "History":
      catImgElement.src = './images/images theme/history.jpg';
      break
    case "Geography":
      catImgElement.src = './images/images theme/geography.jpg';
      break
  }
}

function answerDistribution(answerList){
  let shuffledArray = answerList.sort((a, b) => 0.5 - Math.random());

  buttonAnswerElement.forEach((e, i)=> {
    e.innerText = shuffledArray[i];
  })
}

//RESET FUNCTION
function reset(){ 
  nextElement.classList.add('hidden');
  buttonAnswerElement.forEach((e)=>{
    e.classList.remove('wrong-answer');
    e.classList.remove('good-answer');
  })
  buttonAnswerElement.forEach((e) => e.disabled = false)
  scoreElement.innerHTML = `Level ${score}`;
}

function newQuestion() {
  //RESET
  reset();
  //Choose a random question
  let chosenQuestion = questions[getRandomIndex()];
  //Associate img with category
  imgCatAssociation(chosenQuestion.category);
  console.log(chosenQuestion.category);
  //Change question text with the chosen question
  questionTextElement.innerText = chosenQuestion.question;
  //Make an array with all the answers
  let answers = [...chosenQuestion.incorrect_answers,chosenQuestion.correct_answer];
  //Change answers with chosen answers randomly
  answerDistribution(answers);
  //Selection of the answer
  selectAnswer(chosenQuestion);
};




/* --------------- START QUESTION --------------*/
function loadingpage() {
  // clear question text 
}

function startQuestion() {
  // Call loadingpage()
  // Sleep
  // questionTextElement.innerText = questions[i].question;
};

;
/* --------------- SELECT ANSWER --------------*/


function selectAnswer(questionList) {
  buttonAnswerElement.forEach((e) => {
    e.addEventListener('click', () => {
      if (e.innerText !== questionList.correct_answer) {
        e.classList.add('wrong-answer');
        buttonAnswerElement.forEach(elt => {
          if (elt.innerText === questionList.correct_answer) {
            elt.classList.add('good-answer');
          }
        })
      } else {
        e.classList.add('good-answer');
        score++;
      }
      buttonAnswerElement.forEach((e) => e.disabled = true);
      nextQuestion();
    })
  })
}
      
      




/* --------------- NEXT QUESTION --------------*/

function nextQuestion() {
  nextElement.classList.remove('hidden');
};

nextElement.addEventListener('click', () => newQuestion())








