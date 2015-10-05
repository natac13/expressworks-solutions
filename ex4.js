import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({extened: false}));

app.post('/form', (request, response) => {
    let rev = request.body.str.split('').reverse().join('');
    response.end(rev);
});

app.listen(process.argv[2]);


