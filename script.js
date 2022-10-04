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
console.log(answerElement)
let score = 0;

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
  newQuestion();
  // questionTextElement.innerText = questions[i].question;


};

startQuestion();
/* --------------- SELECT ANSWER --------------*/

function selectAnswer(questionList) {
  answerElement.forEach((e)=>{
    e.addEventListener('click', (event) => {
      if (e.innerText===questionList.correct_answer){
        console.log('gg');
      }
      else {
        console.log('nul');
      }
    });
  })
}

/* --------------- NEXT QUESTION --------------*/

function nextQuestion() {

};







