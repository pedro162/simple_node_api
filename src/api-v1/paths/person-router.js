import express from 'express';
import personModel from '../models/person-model';

const personRouter = express.Router();

//personRouter.use('/', (req, res, next) => {
//    res.send('People endpoint is working fine!');
//});

function getAll(req, res, next) {
    personModel.getAll({}, (error, people) => {
        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.json(people);
    });
}

function getById(req, res, next) {
    const id = req.params.id;
    personModel.getById(id, (error, person) => {
        if (error) {
            return res.status(404).json({ error: error.message });
        }

        res.json(person);
    });
}

personRouter.get('/', getAll);
personRouter.get('/:id', getById);

export default personRouter;