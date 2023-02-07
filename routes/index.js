//routes for making notes and whatnot. Modularizing for the sake of understanding how to do it
const fs = require('../utils/dbHandle.js');
const express = require('express');
const app = express();
const notesRouter = require('./noteRoutes.js');

app.use('/notes', notesRouter);

module.exports = app;
