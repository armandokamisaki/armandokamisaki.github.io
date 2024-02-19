import { renderListWithTemplate } from "./utils.mjs";
import {productCardTemplate} from "./MovieList.mjs";

/**
 * @param {ExternalServices} dataSource - Handles fetching data
 * @param {ExternalServices} dataFunction - gets data from API
 * @param searchInput - input value from user
 * @param {Element} listElement - Target html element to render products in
 * 
 */

export default class MovieSearch {
    // Requires datasource and HTML element to render in
    constructor(dataSource, searchInput, listElement) {
        this.dataSource = dataSource;
        this.searchInput = searchInput;
        this.listElement = listElement;
    }

    // Populate movie list
    async init() {
        const movieList = await this.dataSource.getMovieByKey(this.searchInput);
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
}