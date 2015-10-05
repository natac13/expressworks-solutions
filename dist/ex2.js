'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var app = (0, _express2['default'])();
var htmlPath = process.argv[3];

app.use(_express2['default']['static'](htmlPath || _path2['default'].join(__dirname + '/public')));

app.listen(process.argv[2]);