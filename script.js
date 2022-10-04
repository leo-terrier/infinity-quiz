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


const imgGeo = document.createElement("img");
imgGeo.src = './images/images theme/geography.jpg';

const imgHist = document.createElement("img");
imgHist.src = './images/images theme/history.jpg';

const catImgElement = document.querySelector("#catImg");
const questionTextElement = document.querySelector(".textQuestion");
const answerElement = document.querySelectorAll(".answer");
const scoreElement = document.querySelector("#score");
const nextElement = document.querySelector('.nextQuestion');
const buttonElement = document.querySelectorAll('button');

let score = 1;

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


function imgCatAssociation(category) {
  switch (category) {
    case "History":
      catImgElement.src = imgHist.src;
      break
    case "Geography":
      catImgElement.src = imgGeo.src;
      break
  }
}

function answerDistribution(answerList){
  let shuffledArray = answerList.sort((a, b) => 0.5 - Math.random());
  let i=0;
  answerElement.forEach((e)=> {
    e.innerText = shuffledArray[i];
    i++;
  })
}

function newQuestion() {
  nextElement.classList.add('hidden');
  answerElement.forEach((e)=>{
    e.classList.remove('wrong-answer');
    e.classList.remove('good-answer');
  })
  buttonElement.forEach((e) => e.disabled = false)
  scoreElement.innerHTML = `Level ${score}`;
  //Choose a random question
  let questionIndex = getRandomIndex();
  let chosenQuestion = questions[questionIndex];
  //Associate img with category
  imgCatAssociation(chosenQuestion.category);
  console.log(chosenQuestion.category);
  //Change question text with the chosen question
  questionTextElement.innerText = chosenQuestion.question;
  //Make an array with all the answers
  let answers = chosenQuestion.correct_answer.split(',').concat(chosenQuestion.incorrect_answers);
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
  answerElement.forEach((e)=>{
    e.addEventListener('click', () => {
      if (e.innerText!=questionList.correct_answer){
        e.classList.add('wrong-answer');
        for (let i=0; i<answerElement.length; i++){
          if (answerElement[i].innerText == questionList.correct_answer){
            answerElement[i].classList.add('good-answer');
            console.log(answerElement[i]);
          }
        }
        nextQuestion();
      }
      else {
        e.classList.add('good-answer');
        score++;
        nextQuestion();
      }
      buttonElement.forEach((e)=>e.disabled = true)
    });
  })
}

/* --------------- NEXT QUESTION --------------*/

function nextQuestion() {
  nextElement.classList.remove('hidden');
};

nextElement.addEventListener('click', () => newQuestion())








