const express = require('express');
const app = express()
var api = require('./api');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path');

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));


//Rota
app.get("/", function(req, res) {

    res.render('form')
});



app.post("/", function(req, res) {
    var temp = api.getWeather(req,temp);
    res.send(""+temp);
    //"Cidade não existe!" + "<br>" + '<input type="button" value="Go Back From Whence You Came!" onclick="history.back(-1)" />'
    //+ '<input type="button" value="Go Back From Whence You Came!" onclick="history.back(-1)" />

});



app.listen(8081, function() {
    console.log("Servidor a funcionar!")
});