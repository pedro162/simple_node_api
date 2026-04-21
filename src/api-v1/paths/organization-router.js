import express from 'express';

const organizationRouter = express.Router();

organizationRouter.use('/', (req, res, next) => {
    res.send('Organization endpoint is working fine!');
});

export default organizationRouter;