import http from 'http';
import express from 'express';
import routerApi from './api-v1/api-router.js';

const app = express();

app.use('/api/v1', routerApi);
app.use('/', (req, res, next) => {
    res.send('------- CONTACT API --------');
});

const port = 5500;

http.createServer(app).listen(port, () => {
    console.log(`Server running on port ${port}`);
});