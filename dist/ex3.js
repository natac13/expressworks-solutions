'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();
var templates = process.argv[3];

// set the template engine
app.set('view engine', 'jade');

app.set('views', templates || _path2['default'].join(__dirname + 'templates'));

app.get('/home', function (request, response) {
    response.render('index', { date: new Date().toDateString() });
});

app.listen(process.argv[2]);