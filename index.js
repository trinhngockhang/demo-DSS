var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname + '/public')));

// viewed at http://localhost:1234
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// download
app.get('/download', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/output.xlsx'));
});


app.post('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    // chay du doan
    // Lay gia nha
    // send
});


app.listen(1234);