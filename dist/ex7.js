'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();

app.get('/search', function (request, response) {
    var tmp = {
        results: request.query.results,
        type: request.query.type,
        page: request.query.page

    };
    response.send(tmp);
});

app.listen(process.argv[2]);