'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var app = (0, _express2['default'])();

app.use(_bodyParser2['default'].urlencoded({ extened: false }));

app.post('/form', function (request, response) {
    var rev = request.body.str.split('').reverse().join('');
    response.end(rev);
});

app.listen(process.argv[2]);