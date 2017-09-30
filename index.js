const config = require('./config.json');
const request = require('request');
const fs = require('fs');
let URL = `https://api.flickr.com/services/rest/?api_key=${config.FLICKR.API_KEY}&method=flickr.photos.getRecent&format=json`;

request.get(URL, (err, response, body) => {
  console.log(err);
  console.log(JSON.parse(body.substring(14, body.length -1)).photos.photo);
});