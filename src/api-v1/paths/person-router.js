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

function insert(req, res, next) {
    const personData = req.body;
    personModel.insert(personData, (error, createdPerson) => {
        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json(createdPerson);
    });
}

function update(req, res, next) {
    const id = req.params.id;
    const personData = req.body;
    personModel.update(id, personData, (error, updatedPerson) => {
        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.json(updatedPerson);
    });
}

function remove(req, res, next) {
    const id = req.params.id;
    personModel.deleteById(id, (error) => {
        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.status(204).send();
    });
}

personRouter.get('/', getAll);
personRouter.get('/:id', getById);
personRouter.post('/', insert);
personRouter.put('/:id', update);
personRouter.delete('/:id', remove);

export default personRouter;