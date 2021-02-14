const axios = require("axios");

const BASE = "https://api.jikan.moe/v3";

const search = (query) => {
	// let url = "khttps://api.jikan.mode/v2/
	let request = `${BASE}/search/anime?q=${query}/page=1`;
	console.log(request)
	return axios.get(request)
}
	
// animeSearch("naruto").then(response => console.log(response.data.results.length)).catch(console.log) 
// exmaple usage of getting data
// 



export {search} ;
