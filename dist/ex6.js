'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var app = (0, _express2['default'])();

app.param('id', function (req, res, next, id) {
  req.id = id;
  next();
});
app.put('/message/:id', function (req, res) {
  var hash = _crypto2['default'].createHash('sha1').update(new Date().toDateString() + req.id).digest('hex');
  res.end(hash);
});

app.listen(process.argv[2]);