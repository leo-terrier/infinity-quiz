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

let score = 0;

const imgGeo = document.createElement("img");
imgGeo.src = './images/images theme/geography.jpg';

const imgHist = document.createElement("img");
imgHist.src = './images/images theme/history.jpg';

const catImgElement = document.querySelector("#catImg");
const questionTextElement = document.querySelectorAll(".textQuestion");

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
    question: "hich of these countries is &quot;doubly landlocked&quot; (surrounded entirely by one or more landlocked countries)?",
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

const questionsLength = questions.length;

function getRandomIndex(questionsLength) {
  return Math.floor(Math.random() * questions.length);
}

function imgCatAssociation(category) {
  switch (category)  {
    case "History":
      catImgElement.src = imgHist.src;
      break
    case "Geography":
      catImgElement.src = imgGeo.src;
      break
  }
}

function newQuestion(){
  let questionIndex = Math.floor(getRandomIndex(questions.length));
  let chosenQuestion = questions[questionIndex];
  let chosenQuestionCat = chosenQuestion.category;
  imgCatAssociation(chosenQuestionCat);
  console.log(chosenQuestionCat);
};




/* --------------- START QUESTION --------------*/
function loadingpage(){
  // clear question text 
}

function startQuestion(){
  // Call loadingpage()
  // Sleep
  newQuestion();
  // questionTextElement.innerText = questions[i].question;
  

};

startQuestion();
/* --------------- SELECT ANSWER --------------*/

function selectAnswer(){

};

/* --------------- NEXT QUESTION --------------*/

function nextQuestion(){

};







