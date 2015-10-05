'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _stylus = require('stylus');

var _stylus2 = _interopRequireDefault(_stylus);

var port = process.argv[2];
var home = process.argv[3]; // home path for files index.html & stylus
var app = (0, _express2['default'])();

app.use(_stylus2['default'].middleware(home + '/*.styl'));
app.use(_express2['default']['static'](home));
// app.get('/', (req, res) => {
//     res.render(home + 'main.css');
// });

app.listen(port);