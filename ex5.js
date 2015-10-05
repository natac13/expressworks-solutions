import express from 'express';
import stylus from 'stylus';
const port = process.argv[2];
const home = process.argv[3]; // home path for files index.html & stylus
const app = express();

app.use(stylus.middleware(home + '/*.styl'));
app.use(express.static(home))
// app.get('/', (req, res) => {
//     res.render(home + 'main.css');
// });

app.listen(port);