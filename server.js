// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(process.env.PORT || 4001, function () {
    console.log('Your node js server is running on port ' + (process.env.PORT || 4001));
}); 