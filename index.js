var weather = require('openweather-apis');
let city = 'Lisboa';
let temperature;
let apiKey = '34bc4e52df32eb5758d9e67bd2b39e43';
	weather.setLang('pt');
	// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
	// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
	// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
	// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
	// Turkish - tr, Croatian - hr, Catalan - ca


	// set city by name
	weather.setCity(city);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID(apiKey);

    weather.getTemperature(function(err, temp){
		temperature = temp;
        console.log(temp);
	});
  let http = require('http');

  let handleRequest = (request, response) => {
    var html = [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>Sample Response</title>',
            '</head>',
            '<body>',
                '<div style="background-color: lightgray; width: 120px; padding: 5px; padding-left:30px ;border-radius: 15px">',
                '<h1>',
                city,
                '</h1>',
                '<h4>',
                temperature,
                'ºC',
                '</h4>',
                '</div>',
            '</body>',
        '</html>'
    ].join('');
      response.writeHead(200, {
        'Content-Length': Buffer.byteLength(html, 'utf8'),
        'Content-Type': 'text/html;'
      });
      response.write(html, 'utf8');
      response.end();
  };
  
  http.createServer(handleRequest).listen(8000);