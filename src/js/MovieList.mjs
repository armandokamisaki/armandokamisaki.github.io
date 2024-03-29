import { renderListWithTemplate } from "./utils.mjs";

/**
 * @param {ExternalServices} dataSource - Handles fetching data
 * @param {Element} listElement - Target html element to render products in
 */

export default class MovieList {
    // Requires datasource and HTML element to render in
    constructor(dataSource, listElement) {
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    // Populate movie list
    async init() {
        const movieList = await this.dataSource.getUpcomingMovieList();
        this.renderList(movieList);
        console.log(movieList);

        //document.getElementById("listing_title").innerHTML = `Top Products: ${this.category}`;

        /*const filteredProducts = this.filterByDenylist(products);
        this.renderList(filteredProducts);*/
    }

    // Render HTML for each movie
    renderList(movieList) {
        renderListWithTemplate(productCardTemplate, this.listElement, movieList);
    }

    async getList(searchInput, dataFunction, movieElement) {
      this.listElement = movieElement;
      const list = this.dataSource.dataFunction(searchInput);
      this.renderList(list);    
    }
}

export function productCardTemplate(product) {
  let image;
  if(product?.primaryImage?.url !== null && product?.primaryImage?.url !== undefined) {
  //if(product?.primaryImage.hasOwnProperty("url")) {
    image = product.primaryImage.url;
  } else {
    image = "../src/images/noImage.png";
  } 
    return `<li class="movie-card">
    <div class="movieImage">
    <a href="/product_pages/?product=${product.id}">
      <img
        src="${image}"
        alt="${product.titleText.text}"
      />
      </div>
      <div class="movieInfo">
      <h2>${product.titleText.text}</h2>
      <p>${product.primaryImage?.caption?.plainText}</p>
      <p>Release year: ${product.releaseYear.year}</p>
    </a> 
    </div>   
  </li>`;
}
