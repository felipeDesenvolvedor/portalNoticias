const expressValidator = require('express-validator');
const express          = require('express');
const consign          = require('consign');
const bodyParser       = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controller')
.into(app);

module.exports = app;
