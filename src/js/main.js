import ExternalServices from "./ExternalServices.mjs";
import MovieList from "./MovieList.mjs";

document.getElementById('icon').addEventListener('click', function () {
  var nav = document.getElementsByTagName('nav')[0];
  if (nav.style.display == 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
  }
}, false);

const dataSource = new ExternalServices();
//const movie = await dataSource.getUpcomingMovieList();
const element = document.querySelector(".top-list");
const movieList = new MovieList(dataSource, element);
movieList.init();

