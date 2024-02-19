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
