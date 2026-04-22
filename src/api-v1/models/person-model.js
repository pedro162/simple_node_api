import db from '../utils/db.js';

function insert(params, callback) {
    const newPerson = {
        id: Math.floor(Math.random() * 1000) + 3, // Simulate ID generation
        name: params.name,
        email: params.email,
        phone: params.phone,
        organization: params.organization || null,
        tags: params.tags || []
    };

    db.personModel.insert(params, callback);
    // Simulate successful insertion
    //const error = null;
    //callback(error, newPerson);
}

function getAll(params, callback) {
    const fakeList = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        organization: null,
        tags: ['cinema', 'work', 'family']
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        organization: null,
        tags: ['gym', 'friends']
    }
    ];

    //const error = null;
    //callback(error, fakeList);
    db.personModel.find(params, callback);
}

function getById(id, callback) {
    const fakeList = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        organization: null,
        tags: ['cinema', 'work', 'family']
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        organization: null,
        tags: ['gym', 'friends']
    }
    ];

    //const person = fakeList.find(p => p.id === parseInt(id));
    //const error = person ? null : new Error('Person not found');
    //callback(error, person);

    db.personModel.findOne({ _id: id }, callback);
}

function update(id, params, callback) {
    const fakeList = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        organization: null,
        tags: ['cinema', 'work', 'family']
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        organization: null,
        tags: ['gym', 'friends']
    }
    ];

    //const personIndex = fakeList.findIndex(p => p.id === parseInt(id));
    //if (personIndex === -1) {
    //    const error = new Error('Person not found');
    //    callback(error, null);
    //    return;
    //}

    //const updatedPerson = { ...fakeList[personIndex], ...params };
    //fakeList[personIndex] = updatedPerson;
    //const error = null;
    //callback(error, updatedPerson);
    db.personModel.update({ _id: id }, params, { returnUpdatedDocs: true }, callback);
}

function deleteById(id, callback) {
    const fakeList = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        organization: null,
        tags: ['cinema', 'work', 'family']
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        organization: null,
        tags: ['gym', 'friends']
    }
    ];

    //const personIndex = fakeList.findIndex(p => p.id === parseInt(id));
    //if (personIndex === -1) {
    //    const error = new Error('Person not found');
    //    callback(error, null);
    //    return;
    //}
    //
    //const deletedPerson = fakeList.splice(personIndex, 1)[0];
    //const error = null;
    //callback(error, deletedPerson);

    db.personModel.remove({ _id: id }, {}, callback);
}

export default {
    insert,
    getAll,
    getById,
    update,
    deleteById
}