const express = require('express');
const app = express();
var axios = require("axios").default;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./api');

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));


//Rota
app.get("/", function(req, res) {

    res.render('form');

});


//Rota através de POST
app.post("/", function(req, res) {

    api.getWeather(req,function(err,ret){
        //Erro: Cidade Inválida
        if(err){
            return res.status(400).send("Cidade não existe!" + "<br>" + '<input type="button" value="Go Back From Whence You Came!" onclick="history.back(-1)" />');
        }
        //Apresentação de temperatura
        else{
            return res.send(ret + '<input type="button" value="Go Back From Whence You Came!" onclick="history.back(-1)" />');
        }
    });
});


app.listen(8081, function() {
    console.log("Servidor a funcionar na porta 8081!");
});