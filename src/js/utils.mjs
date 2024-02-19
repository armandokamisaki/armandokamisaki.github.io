// render a list of movies in HTML using a given template function
export function renderListWithTemplate(
    templateFunction,         // Function used to render the movie
    parentElement,            // Target HTML element for rendering
    list,                     // List of movies to be rendered
    position = "afterbegin",  // Used in insertAdjacentHTML(position, ...)
    clear = false             // True if the HTML Element needs to be cleared before render
    ) {
      // Clear the HTML element if requested
      if (clear) {
        parentElement.replaceChildren();
      }
      // Convert list into filled templates.
      const htmlItems = list.results?.map((item) => templateFunction(item));
      console.log(htmlItems);
      // Insert filled templates into the HTML.
      parentElement?.insertAdjacentHTML(position, htmlItems && htmlItems.join(""));
    }
    
    // get search word from URL
    export function getParam(params) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const search = urlParams.get(params);

      return search;
    }
  