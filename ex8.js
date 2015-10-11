import express from 'express';
import fs from 'fs';
const file = process.argv[3];
const port = process.argv[2];
const app = express();

app.get('/books', (request, response) => {
    // fs.createReadStream(file)
    //     .pipe(JSON.parse())
    //     .pipe(process.stdout)
    //     .on('data', (data) => {
    //         response.write(data);
    //     })
    fs.readFile(file, (error, data) => {
        let tmp = JSON.parse(data);
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
