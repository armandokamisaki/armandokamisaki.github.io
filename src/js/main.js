import ExternalServices from "./ExternalServices.mjs";
import MovieList from "./MovieList.mjs";
import MovieSearch from "./MovieSearch.mjs";

document.getElementById('icon').addEventListener('click', function () {
  var nav = document.getElementsByTagName('nav')[0];
  if (nav.style.display == 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
  }
}, false);

let words = document.querySelectorAll(".word");
words.forEach(word => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

const dataSource = new ExternalServices();
const element = document.querySelector(".top-list");
const movieList = new MovieList(dataSource, element);
movieList.init();

const searchBtn = document.getElementById("submitBtn");


searchBtn.addEventListener("click", (e) => {
   e.preventDefault();
   const searchInput = document.getElementById("searchInput").value;     
   window.location.href = `./src/movie/index.html?search=${searchInput}`;

});
