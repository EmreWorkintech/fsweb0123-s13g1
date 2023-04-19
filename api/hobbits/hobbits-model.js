let id = 0;
function getId() {
    return ++id;
}

const hobbits = [
    {
        id: getId(),
        name: "Frodo"
    },
    {
        id: getId(),
        name: "Sam"
    },
    {
        id: getId(),
        name: "Pippin"
    },
]

//CRUD
function getAll() {
    return hobbits;
}

async function getById(id) {
    const hobbit = hobbits.find(hobbit => hobbit.id == id);
    return hobbit;
}


function create(payload) {
    const newHobbit = {
        id: getId(),
        name: payload.name
    }
    hobbits.push(newHobbit);
    return newHobbit;
}

function search(search, limit, page, sortBy, dir) {
    const start = (page-1)*limit;
    const sortField = sortBy || 'id';
    const direction = dir || 'asc';

    const newHobbit = {
        id: getId(),
        name: payload.name
    }
    hobbits.push(newHobbit);
    return newHobbit;
}

function update(payload, id) {
    const hobbit = hobbits.find((hobbit)=> hobbit.id == id);
    hobbit.name = payload.name;
    return hobbit;
}

function remove(id) {
    //deletes the hobbit by id

}

module.exports = {
    create,
    update,
    remove,
    getAll,
    search,
    getById
}