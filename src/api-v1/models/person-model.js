function insert() {

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

    const error = null;
    callback(error, fakeList);
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

    const person = fakeList.find(p => p.id === parseInt(id));
    const error = person ? null : new Error('Person not found');
    callback(error, person);
}

function update() {

}

function deleteById() {

}

export default {
    insert,
    getAll,
    getById,
    update,
    deleteById
}