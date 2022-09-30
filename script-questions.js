const geography = require("./data-question/data-geography.json");
const history = require("./data-question/data-history.json");
const music = require("./data-question/data-music.json");
const science = require("./data-question/data-science.json");
const sport = require("./data-question/data-sport.json");

const questionListFile = {
  geography: geography,
  history: history,
  music: music,
  science: science,
  sport: sport,
};

console.log(questionListFile.geography.results[0]);

// Exemple pour faire apparaitre des éléments dans le DOM

/* document.querySelector(".logo-container").addEventListener("click", function () {
  const p = document.createElement("p");
  p.addEventListener("click", function () {
    p.style.display = "none";
  });
  p.innerHTML = "hello world";
  document.querySelector("main").appendChild(p);
}); */
