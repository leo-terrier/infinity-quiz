const startButton = document.querySelector(".startButton");

const bestScore = document.querySelector("footer :last-child");
const lastScore = document.querySelector("footer :first-child");

const queryString = window.location.search;

if (queryString) {
  const urlParams = new URLSearchParams(queryString);

  const scoreArray = JSON.parse(urlParams.get("array"));
  console.log(scoreArray);
  lastScore.insertAdjacentText("beforeend", " " + scoreArray[0]);
  bestScore.insertAdjacentText("beforeend", " " + Math.max(...scoreArray));
}

startButton.onclick = () => {
  if (queryString) {
    window.location.href = "question.html" + queryString;
  } else {
    window.location.href = "question.html";
  }
};
