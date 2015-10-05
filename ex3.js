import path from 'path';
import express from 'express';
const app = express();
const templates = process.argv[3];

// set the template engine
app.set('view engine', 'jade');

app.set('views', templates || path.join(__dirname + 'templates'));

app.get('/home', (request, response) => {
    response.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);