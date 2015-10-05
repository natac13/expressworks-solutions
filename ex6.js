import express from 'express';
import cry from 'crypto';
const app = express();

app.param('id', (req, res, next, id) => {
  req.id = id;
  next()
});
app.put('/message/:id', (req, res) => {
    let hash = cry.createHash('sha1')
      .update(new Date().toDateString() + req.id)
      .digest('hex');
    res.end(hash);
});

app.listen(process.argv[2]);

/*
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])

 */
