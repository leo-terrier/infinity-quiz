// Exemple pour faire apparaitre des éléments dans le DOM

// document.querySelector(".logo-container").addEventListener("click", function () {
//   const p = document.createElement("p");
//   p.addEventListener("click", function () {
//     p.style.display = "none";
//   });
//   p.innerHTML = "hello world";
//   document.querySelector("main").appendChild(p);
// });

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

function newQuestion(){
  let questionIndex = Math.floor(Math.random) * questions.length;
  console.log(questionIndex);
  console.log(parseInt(questionIndex));
};

newQuestion();

function startQuestion(){

};


function selectAnswer(){

};


function NextQuestion(){

};
