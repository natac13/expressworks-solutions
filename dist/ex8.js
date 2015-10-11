'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var file = process.argv[3];
var port = process.argv[2];
var app = (0, _express2['default'])();

app.get('/books', function (request, response) {
    // fs.createReadStream(file)
    //     .pipe(JSON.parse())
    //     .pipe(process.stdout)
    //     .on('data', (data) => {
    //         response.write(data);
    //     })
    _fs2['default'].readFile(file, function (error, data) {
        var tmp = JSON.parse(data);
        response.json(tmp);
    });
});

app.listen(port);

// var express = require('express')
// var app = express()
// var fs = require('fs')

// app.get('/books', function(req, res){
//   var filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })

// app.listen(process.argv[2])