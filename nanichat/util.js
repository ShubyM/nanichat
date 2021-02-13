const axios = require('axios')

function httpGet() {
  let xmlHttp = new XMLHttpRequest();
	let theUrl = "https://api.jikan.moe/v3/anime/20/episodes/2"
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}



const get

console.log(httpGet())
