/*
 JADE
 Exercise 3 of 8

Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.

*/

var express = require('express');
var app = express();
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
    res.render(process.argv[3], {date: new Date().toDateString()})
})

app.listen(process.argv[2]);
