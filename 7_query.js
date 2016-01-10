/*
 WHAT'S IN QUERY
 Exercise 7 of 8

Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.

*/

var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var str = "";
    var keys = Object.keys(req.query);
    var obj = {};
    
    for(var i = 0; i<keys.length; i++)
    {
        obj[keys[i]] = req.query[keys[i]];
        console.log(obj);
    } 
    res.send(obj);
})

app.listen(process.argv[2]);
