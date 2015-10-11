import express from 'express';
const app = express();

app.get('/search', (request, response) => {
    let tmp = {
        results: request.query.results,
        type: request.query.type,
        page: request.query.page

    };
    response.send(tmp);
});

app.listen(process.argv[2]);