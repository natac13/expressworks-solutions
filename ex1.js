import express from 'express';
let app = express();

app.get('/home', (request, response) => {
    response.end('Hello World!');
});

app.listen(process.argv[2]);