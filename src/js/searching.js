import ExternalServices from "./ExternalServices.mjs";
import MovieSearch from "./MovieSearch.mjs";
import {getParam} from "./utils.mjs";

document.getElementById('icon').addEventListener('click', function () {
    var nav = document.getElementsByTagName('nav')[0];
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
  }, false);
  
  const dataSource = new ExternalServices();
  const searchWord = getParam("search");
  const element = document.querySelector(".top-list");
  const movieSearch = new MovieSearch(dataSource, searchWord, element);
  movieSearch.init();
  
  const searchBtn = document.getElementById("submitBtn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput").value;     
    window.location.href = `./src/movie/index.html?search=${searchInput}`;
 
 });
