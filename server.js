const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');



app.use(express.static(__dirname, { dotfiles: 'allow' }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

require('./repository/endpoints/getCars')(app);
require('./repository/endpoints/getPage')(app);
require('./repository/endpoints/postChangeCarPower')(app);


http.listen(52378, () => {
    console.log('Server started on port 52378');
});
