import http from 'http';
import express from 'express';
import routerApi from './api-v1/api-router.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());//Associates the body parser middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));//Associates the body parser middleware to parse URL-encoded request bodies

app.use('/api/v1', routerApi);
app.use('/', (req, res, next) => {
    res.send('------- CONTACT API --------');
});

const port = 5500;

http.createServer(app).listen(port, () => {
    console.log(`Server running on port ${port}`);
});