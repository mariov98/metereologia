var axios = require("axios").default;

var getWeather = (req, callback) => {
//Parâmetros a enviar para a API
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: req.body.city,
            units: 'metric',
            mode: 'html'
        },
        headers: {
            'x-rapidapi-key': '733f49e96dmsh69ee05389121cfep136ffbjsn8df7c63fdc22',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    //Realização do Pedido e Obtenção da Resposta
    axios.request(options).then(function(response) {
        //console.log(response);
        return callback(null, response.data);
    }).catch(function(err) {
        return callback(err);

    });
};

module.exports.getWeather = getWeather;