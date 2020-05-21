var path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static('dist'));


const resp = require('./API.js');
const testValue = require('./mockAPI');

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

app.get('/test', function (req, res) {
    res.send(testValue);
});

app.post('/article', resp.validate, resp.PostHandler);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
})
module.exports = app;