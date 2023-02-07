//routes for notes
const { read, write, remove } = require('../utils/dbHandle.js');

const notes = require('express').Router();
const { v4: uuid } = require('uuid');
//gets all notes within the db.json file
notes.get('/', (req, res) => {
    read('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
//adds notes to the db.json file
notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    console.log(title, text);
    if (title && text) {
        const id = uuid();
        const newNote = {
            id: uuid(),
            title,
            text,
        };

        console.log(title, newNote);
        write('./db/db.json', newNote);
        const back = {
            status: 'worked',
            body: newNote,
        };
        res.json(back);
    } else {
        res.json('error');
    }
});
//deletes notes based on id of the note
notes.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    remove('./db/db.json', id);
    res.json(`removed note id: ${id}`);
});

module.exports = notes;
