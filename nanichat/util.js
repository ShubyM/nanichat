const axios = require("axios");

const BASE = "https://api.jikan.moe/v3";

const animeSearch = (query) => {
	// let url = "khttps://api.jikan.mode/v2/
	let request = `${BASE}/search/anime?q=${query}/Zero&page=1`;
	console.log(request)
	return axios.get(request)
}
	
animeSearch("narto").then(response => console.log(response.data)).catch(console.log) 

