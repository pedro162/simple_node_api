import express from 'express';
import personRouter from './paths/person-router.js';
import organizationRouter from './paths/organization-router.js';

const routerApi = express.Router();

routerApi.use('/people', personRouter);
routerApi.use('/organizations', organizationRouter);
routerApi.use('/', (req, res, next) => {
    res.send('API V1 is working fine!');
});

export default routerApi;