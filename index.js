var weather = require('openweather-apis');
const http = require('http');
const { parse } = require('querystring');
let apiKey = '34bc4e52df32eb5758d9e67bd2b39e43';


	// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
	// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
	// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
	// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
	// Turkish - tr, Croatian - hr, Catalan - ca


	// set city by name

	// 'metric'  'internal'  'imperial'

	// check http://openweathermap.org/appid#get for get the APPID


    const server = http.createServer((req, res) => {
        
        if (req.method === 'POST') {
            collectRequestData(req, result => {
                weather.setLang('pt');
                weather.setAPPID(apiKey);
                weather.setUnits('metric');
                weather.setCity(result.city);
                weather.getTemperature(function(err, temp){
                    res.end(`
                    <!doctype html>
                    <html>
                        <head>
                            <meta charset="utf-8" />
                            <title>Sample Response</title>
                        </head>
                    <body>
                        <div style="background-color: lightgray; width: 120px; padding: 5px; padding-left:30px ;border-radius: 15px">
                        <h1>
                            ${result.city}
                        </h1>
                        <h4>
                            ${temp} ºC
                        </h4>
                    </div>
                        </form>
                    </body>
                    </html>
                `);
                });
            });
        }else{
            res.end(`
                <!doctype html>
                <html>
                    <head>
                        <meta charset="utf-8" />
                        <title>Sample Response</title>
                    </head>
                <body>
                    <form action="/" method="post">
                        <input type="text" name="city" /><br />
                        <button>Check</button>
                    </form>
                </body>
                </html>
            `);
        }
    });
    server.listen(8000);

    function collectRequestData(request, callback) {
        const FORM_URLENCODED = 'application/x-www-form-urlencoded';
        if(request.headers['content-type'] === FORM_URLENCODED) {
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString();
            });
            request.on('end', () => {
                callback(parse(body));
            });
        }
        else {
            callback(null);
        }
    }

