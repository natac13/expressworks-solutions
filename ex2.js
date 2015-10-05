import express from 'express';
import path    from 'path';
const app = express();
const htmlPath = process.argv[3];

app.use(express.static(htmlPath || path.join(__dirname + '/public')));

app.listen(process.argv[2]);
