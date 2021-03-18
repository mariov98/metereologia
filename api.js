var axios = require("axios").default;

var getWeather = (req, callback) => {

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

    axios.request(options).then(function(response) {
        console.log(response);
        return response.data;

        // console.log(response.body);
    }).catch(function(error) {
        console.error(error);
        return error;

    });
};

module.exports.getWeather = getWeather;