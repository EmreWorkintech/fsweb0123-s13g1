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


function create(payload) {
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
    getAll
}