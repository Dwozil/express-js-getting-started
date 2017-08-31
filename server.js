const express = require('express');
const path = require('path');

//Hello Route
const app = express();
app.get('/Hello/', function (req, res) {
    res.send('Hello World!!');
});

//Index Route
app.get('/', function (req, res) {
    res.render('index.html');
});

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Boot Server
app.listen(3000, function(){
    console.log('App listening on port 3000');
});