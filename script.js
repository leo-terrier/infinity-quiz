/* --------------- INITIALISATION --------------*/
const body = document.querySelector("body");
const catImgElement = document.querySelector("#catImg");
const questionTextElement = document.querySelector(".questionParagraph");
const buttonAnswerElement = document.querySelectorAll(".answer");
const scoreElement = document.querySelector("#score");

const life1Element = document.querySelector("div.life1");
const life2Element = document.querySelector("div.life2");
const life3Element = document.querySelector("div.life3");

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

///APPEL API///
const musicAPI = "https://opentdb.com/api.php?amount=1&category=12&difficulty=medium&type=multiple";
const geoAPI = "https://opentdb.com/api.php?amount=1&category=22&difficulty=medium&type=multiple";
const historyAPI = "https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple";
const sportAPI = "https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple";

const APIArray = [musicAPI, geoAPI, historyAPI, sportAPI];

const callAPI = async () => {
  const response = await fetch(APIArray[Math.floor(Math.random() * APIArray.length)]);
  const responseJSON = await response.json();
  return responseJSON.results;
};

///APPEL API///

// const buttonElement = document.querySelectorAll('button');
let score = 0;
let lives = 3;
let chosenQuestion;

//TODO
let questions = [
  (q1 = {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "On a London Underground map, what colour is the Circle Line?",
    correct_answer: "Yellow",
    incorrect_answers: ["Red", "Blue", "Green"],
  }),
  (q2 = {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries is landlocked (surrounded entirely by one or more landlocked countries)?",
    correct_answer: "Uzbekistan",
    incorrect_answers: ["Switzerland", "Bolivia", "Ethiopia"],
  }),
  (q3 = {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
    correct_answer: "Brazil",
    incorrect_answers: ["India", "Mozambique", "Madagascar"],
  }),
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
      catImgElement.src = "./images/images theme/history-resized.jpg";
      break;
    case "Geography":
      catImgElement.src = "./images/images theme/geography-resized.jpg";
      break;
    case "Sports":
      catImgElement.src = "./images/images theme/sport-resized.jpg";
      break;
    case "Entertainment: Music":
      catImgElement.src = "./images/images theme/music-resized.jpg";
      break;
  }
}

function answerDistribution(answerList) {
  let shuffledArray = answerList.sort((a, b) => 0.5 - Math.random());

  buttonAnswerElement.forEach((e, i) => {
    e.innerHTML = shuffledArray[i];
  });
}

//RESET FUNCTION

async function newQuestion() {
  catImgElement.src = "./images/images theme/loading.jpg";
  questionTextElement.innerHTML = "LOADING QUESTION.....";
  //RESET
  reset();
  //Choose a random question
  chosenQuestion = await callAPI();
  chosenQuestion = chosenQuestion[0];
  //Associate img with category
  imgCatAssociation(chosenQuestion.category);

  //Change question text with the chosen question
  questionTextElement.innerHTML = chosenQuestion.question;
  //Make an array with all the answers
  let answers = [...chosenQuestion.incorrect_answers, chosenQuestion.correct_answer];
  //Change answers with chosen answers randomly
  answerDistribution(answers);

  buttonAnswerElement.forEach((e) => (e.disabled = false));

  //Selection of the answer
  buttonAnswerElement.forEach((elt) => {
    /*  e.removeEventListener("click") */
    elt.addEventListener("click", pickAnswerCallback);
  });
}

function reset() {
  buttonAnswerElement.forEach((e) => {
    e.classList.remove("wrong-answer");
    e.classList.remove("good-answer");
  });
  scoreElement.innerHTML = `Score ${score}`;
}

function pickAnswerCallback(e) {
  if (e.target.innerHTML !== htmlDecode(chosenQuestion.correct_answer)) {
    console.log("bad answer");
    e.target.classList.add("wrong-answer");
    buttonAnswerElement.forEach((elt) => {
      if (elt.innerHTML === htmlDecode(chosenQuestion.correct_answer)) {
        console.log("adding green on good answer");
        elt.classList.add("good-answer");
      }
    });
    looseLife();
    console.log(lives);
  } else {
    console.log("good answer");
    e.target.classList.add("good-answer");
    score++;
  }
  buttonAnswerElement.forEach((elt) => (elt.disabled = true));
  if (lives) {
    setTimeout(() => {
      newQuestion();
    }, 1500);
  }
}

/* --------------- START QUESTION --------------*/

/* --------------- SELECT ANSWER --------------*/

function looseLife() {
  lives--;
  if (lives === 2) {
    life3Element.style.backgroundColor = "white";
  }
  if (lives === 1) {
    life2Element.style.backgroundColor = "white";
  }
  if (lives === 0) {
    life1Element.style.backgroundColor = "white";

    const gameOverOutterDiv = document.createElement("div");
    const gameOverInnerDiv = document.createElement("div");
    gameOverOutterDiv.classList.add("gameOverOutterDiv");
    gameOverInnerDiv.classList.add("gameOverInnerDiv");
    const gameOverh1 = document.createElement("h1");
    gameOverh1.innerText = "GAME OVER";
    gameOverh1.classList.add("gameOverh1");
    const retryButton = document.createElement("button");
    retryButton.classList.add("retryButton");
    retryButton.innerText = "PLAY AGAIN";
    gameOverInnerDiv.append(gameOverh1, retryButton);
    gameOverOutterDiv.append(gameOverInnerDiv);
    body.append(gameOverOutterDiv);

    const queryString = window.location.search;
    let scoreArray = [score];
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      scoreArray = scoreArray.concat(JSON.parse(searchParams.get("array")));
    }
    const arrStr = encodeURIComponent(JSON.stringify(scoreArray));

    retryButton.addEventListener("click", () => window.location.replace("/" + "?array=" + arrStr));
  }
}
