const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var weather = require('openweather-apis');
const handlebars = require('express-handlebars')
let apiKey = '34bc4e52df32eb5758d9e67bd2b39e43';
const path = require('path');


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
    //app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, '/')));

app.get("/", function(req, res) {
    res.render('form')
});


app.post("/temp", function(req, res) {
        weather.setLang('pt');
        weather.setAPPID(apiKey);
        weather.setUnits('metric');
        weather.setCity("lisboa");
        console.log(req.body)
        weather.getTemperature(function(err, temp){
            console.log(temp)
        });
});

app.listen(8000, function() {
    console.log("Servidor a funcionar!")
});