//server for the note taker

const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
//gets our notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
    console.log('navigating to notes page');
});
//catch all that handles routes that dont match /notes or /api
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log('navigating to homepage');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
