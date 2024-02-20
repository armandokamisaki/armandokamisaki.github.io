//const baseURL = import.meta.env.BASE_URL;
//const key = import.meta.env.KEY;
//const host = import.meta.env.HOST;
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    throw (`${response.status}: ${response.statusText}`);
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
  return res;
}

export default class ExternalServices {
  constructor() {

  }

  async getUpcomingMovieList() {
    //const url = baseURL + "titles/x/upcoming";
    const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";
    const options = {
        method: 'GET',
	    headers: {
		'X-RapidAPI-Key': "8c07bd9d80msh89961ac401f82dep17a3bcjsn12b9e9a5502f",
		'X-RapidAPI-Host': "moviesdatabase.p.rapidapi.com"
	}
    
};
    const data =  await fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error(err));
    return data;
}


async getMovieByKey(key) {

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/keyword/' + key;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c07bd9d80msh89961ac401f82dep17a3bcjsn12b9e9a5502f',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
  const data =  await fetch(url, options)
  .then(response => response.json())
  .catch(err => console.error(err));
  return data;
  }  
}
