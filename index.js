let request = require('request');

let apiKey = '34bc4e52df32eb5758d9e67bd2b39e43';
let city = 'lisbon';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});