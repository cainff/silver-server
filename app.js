var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/homepage.html');
});

app.get('/activite', function (req, res) {
    res.sendFile(__dirname + '/html/activite.html');
});

app.get('/fonctionnement', function (req, res) {
    res.sendFile(__dirname + '/html/fonctionnement.html');
});

app.get('/quisommesnous', function (req, res) {
    res.sendFile(__dirname + '/html/quisommesnous.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/html/contact.html');
});

app.get('/evenement', function (req, res) {
    res.sendFile(__dirname + '/html/evenement.html');
});

http.listen(1337, function () {
    console.log('listening on *:1337');
});